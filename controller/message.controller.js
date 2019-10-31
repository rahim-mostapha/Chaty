const router = require('express')();
const Room = require('../model/room.model');
const Message = require('../model/message.model');
const jwtVerify = require('../helper/verifying');

// get all messages in room
router.get('/all/:room' , jwtVerify , (req , res) => {
    // search in message collection using room name
    Message.find({room : req.params.room}).exec((err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data});
    });
});

// get rooms of user
router.get('/rooms' , jwtVerify , (req , res) => {
    // search in room collection using user _id
    Room.find({users : req.auth}).populate('users' , ['profile' , 'active' , '_id' , 'firstname' , 'lastname']).exec((err , data ) => {
        if(err) {
            // this will work if some error happen
            console.error(`rooms retrieve data error : ${err}`);
            res.json({status : 'error' , error : err.errmsg || err.message});
        }
        // if arrive here it's mean the fetching done successfully
        res.json({status : 'done' , data});
    });
});

// mark message as deleted 
router.delete('/delete/:_id' , jwtVerify , (req , res) => {
    // get the message by _id and mark it as deleted
    Message.updateOne( {_id : req.params._id} , {deleted : true} , err => {
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