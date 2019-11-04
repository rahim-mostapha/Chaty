const router = require('express')();
const Room = require('../model/room.model');
const jwtVerify = require('../helper/verifying');

// make new Room
router.post('/new' , jwtVerify , (req , res) => {
    // set request data
    let room = new Room({
        users : [req.auth , req.body._id]
    });
    // save request in database
    room.save((err) => {
        if(err) {
            // this will work if some error happen
            console.error(`can't make new request : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the save data done successfully
        res.json({status : 'done'});
    });
});

// get room data
router.get('/find/:_id' , jwtVerify , (req , res) => {
    // search in room collection using user _id
    Room.findOne({users :{"$all" : [req.params._id ,  req.auth ]}}).populate('users' ,['firstname' , 'lastname' , 'profile' , 'cover' , 'active' , '_id']).exec((err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data });
    });
});

// get all rooms
router.get('/all' , jwtVerify , (req , res) => {
    // search in rooms collection using user _id
    Room.find({users : req.auth , group : false} , {users : 1 , _id : 0}).populate('users' , [ '_id' , 'firstname' , 'lastname' , 'profile' , 'cover' , 'active']).exec((err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data});
    });
});

// mark room as deleted 
router.delete('/delete/:_id' , jwtVerify , (req , res) => {
    // get the room by users and mark it as deleted
    Room.deleteOne ( {to : req.params._id , from : req._id} , {deleted : true} , err => {
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