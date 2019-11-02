const router = require('express')();
const Request = require('../model/request.model');
const jwtVerify = require('../helper/verifying');

// make new request
router.post('/new' , jwtVerify , (req , res) => {
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
});

// get request data
router.post('/find' , jwtVerify , (req , res) => {
    // search in request collection using user _id
    Request.find({from : req.auth , to : req.body._id} , (err , data ) => {
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
router.post('/all' , jwtVerify , (req , res) => {
    // search in requests collection using user _id
    Request.find({to : req.auth} , {to : 0 , _id: 0}).populate('from' , ['firstname' , 'lastname' , 'profile' , 'cover']).exec((err , data ) => {
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
    Request.deleteOne ( {to : req.params._id , from : req._id} , {deleted : true} , err => {
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