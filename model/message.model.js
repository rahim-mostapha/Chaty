const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message : {
        type : String ,
        required : [true , 'message content is required']
    } ,
    sender : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    room : {
        type : mongoose.Types.ObjectId,
        ref : 'Room'
    },
    date : {
        type : Date ,
        default : Date.now()
    } ,
    type : {
        type : String ,
        default : 'text'
    } ,
    status : {
        type : Number , 
        default : 0
    } ,
    deleted : {
        type : Boolean ,
        default : false
    } 
});

let Message = mongoose.model('Message' , messageSchema);

module.exports = Message;