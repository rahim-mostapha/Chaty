const router = require('express')();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const verifyToken = require('../helper/verifying');
const fileUploader = require('../helper/file.upload');

// make sure tha user is allowable
router.post('/login' , ( req, res ) => {
    // search for email in database
    User.findOne({ email : req.body.email } , (err , data) => {
        if(err){
            // this will be work if some error happen until fetch data
            console.error(`save error : ${err}`);
            res.json({status : 'save error' , error : err.errmsg || err.message});
        } else if(!data){
            // this will be work if no email like that
            res.json({status : 'user not found'});
        } else {
            data.comparePassword(data.password , req.body.password , (err , result) => {
                if(err || !result){
                    // this will be work if password not match
                    res.json({status : 'password not correct'});
                } else {
                    // this will be work if email and password is exist in database
                    // generate token
                    jwt.sign({_id : data._id} , process.env.SECRET_KEY , {expiresIn : 60 * 60 * 24} , async (err , token) => {
                        if(err) {
                            // this is nu-expexted error
                            res.json({status : 'token gen-error'});
                        } else {
                            data = data.toObject();
                            delete data['password'];
                            delete data['__v'];
                            let status = await changeActiveStatus(data._id ,{active : true , deleted : false});
                            data['active'] = true;
                            data['deleted'] = false;
                            res.json({status : 'done', data , token});
                        }
                    });
                }
            });
        }
    });
});

// create new user acount 
router.post('/signup' , ( req, res ) => {
    // create instance of user and set data it
    let user = new User(req.body);
    // save user data in database
    user.save((err) => {
        if(err) {
            // this will be work if some error happen until save data
            // error may be data missing or connection broken or some thing didn't expectd
            console.error(`save error : ${err}`);
            res.json({status : 'save error' , error : err.errmsg || err.message});
        } else {
            // this will be work if data saved successfully
            res.json({status : 'done'});
        }
    });
});

//update user info 
router.post('/update' , verifyToken , ( req, res ) => {
    // encrypt password if exist
    if(req.body.password){
        let salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password , salt);
    }
    // update user data in database
    User.updateOne({ _id : req.auth} , req.body , (err , data) => {
        // if some data not valid or any error else
        if(err) {
            console.log(`updating error : ${err}`);
            res.json({status : 'updating error' , error : err.errmsg || err.message});
        } else {
            // user update successfuly
            res.json({status : 'done'});
        }
    });
});

// upload file like images anf pdf , act..
router.post('/uploadFile' , verifyToken , ( req, res ) => {
    fileUploader(req , res , (err) => {
        // check for uploading errors
        if(err) {
            console.log(`uploading error : ${err}`);
            res.json({status : 'uploading error' , error : err.errmsg || err.message});
        } else {
            // user file upload successfuly
            let file = req.files[0];
            let active = await changeActiveStatus(req.auth ,{[file.fieldname] : file.filename});
            if(active){
                res.json({status : 'done'});
            } else {
                res.json({status : 'error' , error : 'please try again'});
            }
        }
    });
});

// return user data depend on id
router.get('/info' , verifyToken , ( req, res ) => {
    // request data from database
    User.findOne({_id : req.auth} , (err , data) => {
        if(err) {
            // if some thing wronge this will be work
            console.log(`updating error : ${err}`);
            res.json({status : 'updating error' , error : err.errmsg || err.message});
        } else {
            // get user data successfuly
            res.json({status : 'done', data});
        }
    });
});

// return users data depend on name
router.get('/search/:name' , verifyToken , ( req, res ) => {
    let name = new RegExp(`.*${req.params.name}.*` , 'g');
    // request data from database
    User.find({ "$or" : [ {firstname : name} , {lastname : name} ] }, (err , data) => {
        if(err) {
            // if some thing wronge this will be work
            console.log(`updating error : ${err}`);
            res.json({status : 'updating error' , error : err.errmsg || err.message});
        } else {
            // get user data successfuly
            res.json({status : 'done', data});
        }
    });
});

// end user session 
router.get('/logout' , verifyToken , async ( req, res ) => {
    let active = await changeActiveStatus(req.auth ,{active : false});
    if(active){
        res.json({status : 'done'});
    } else {
        res.json({status : 'error' , error : 'please try again'});
    }
});

// delete user data depend on id
router.delete('/delete' , verifyToken , async ( req, res ) => {
    let active = await changeActiveStatus(req.auth ,{deleted : true});
    if(active){
        res.json({status : 'done'});
    } else {
        res.json({status : 'error' , error : 'please try again'});
    }
});

// make sure that toeken is allow to access
router.get('/verifyToken' , verifyToken , ( req, res ) => {
    // if the request reach here it mean that is allowed 
    res.json({status : 'done'});
});

async function changeActiveStatus ( _id , newData) {
    let returnData = false;
    await User.updateOne({_id} , newData , (err , data) => {
        if(err) returnData = false;
        else returnData = true;
    });
    return returnData;  
}

module.exports = router;