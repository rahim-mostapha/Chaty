const router = require('express')();
const Request = require('../model/request.model');
const Room = require('../model/room.model');
const jwtVerify = require('../helper/verifying');

// make new request
router.post('/new' , jwtVerify , (req , res) => {
    Request.findOneAndUpdate({
        from : req.auth ,
        to : req.body._id
    } , {deleted : false , status : 1} , (err , data) => {
        if(err || !data){
            // set request data
            let request = new Request({
                from : req.auth ,
                to : req.body._id
            });
            // save request in database
            request.save((err) => {
                if(err) {
                    // this will work if some error happen
                    console.error(`can't make new request : ${err}`);
                    res.json({status : 'error' , error : err.errmsg || err.message});
                }
                // if arrive here it's mean the save data done successfully
                res.json({status : 'done'});
            });
        } else {
            res.json({status : 'done'});
        }
    })
});
// reject request
router.post('/reject' , jwtVerify , (req , res) => {
    // uodate request in database
    Request.updateOne( {_id : req.body._id} , {status : 0} , (err , data) => {
        if(err) {
            // this will work if some error happen
            console.error(`can't update request : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        console.log(data , {_id : req.body._id} , {status : 0});
        // if arrive here it's mean the data updated successfully
        res.json({status : 'done'});
    });
});
// accept request
router.post('/accept' , jwtVerify , (req , res) => {
    // uodate request in database
    Request.updateOne( {_id : req.body._id} , {status : 2} , (err , data) => {
        if(err) {
            // this will work if some error happen
            console.error(`can't update request : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the update done successfully
        // set room data
        let room = new Room({
            users : [req.auth , req.body.friend]
        });
        // save request in database
        room.save((err , data) => {
            if(err) {
                // this will work if some error happen
                console.error(`can't make new room : ${err}`);
                res.json({status : 'error' , error : err.errmsg || err.message});
            }
            // if arrive here it's mean the save data done successfully
            res.json({status : 'done' , data});
        });
    });
});

// get request data
router.get('/find/:_id' , jwtVerify , (req , res) => {
    // search in request collection using user _id
    Request.findOne({"$or" : [ { from: req.auth , to : req.params._id} , { from : req.params._id , to: req.auth }], deleted : false})
    .populate('from' , ['firstname' , 'lastname' , 'profile' , 'cover' , '_id'])
    .populate('to' , ['firstname' , 'lastname' , 'profile' , 'cover' , '_id'])
    .exec( (err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data});
    });
});

// get all requests
router.get('/all' , jwtVerify , (req , res) => {
    // search in requests collection using user _id
    Request.find({to : req.auth , status : 1 , deleted : false} , {to : 0}).populate('from' , ['firstname' , 'lastname' , 'profile' , 'cover']).exec((err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data});
    });
});

// mark request as deleted 
router.delete('/delete/:_id' , jwtVerify , (req , res) => {
    // get the request by users and mark it as deleted
    Request.deleteOne ( {_id : req.params._id} , {deleted : true} , err => {
        if(err) {
            // this will work if some error happen
            console.error(`message delete error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the deleting done successfully
        res.json({status : 'done'});
    });
});

module.exports = router;