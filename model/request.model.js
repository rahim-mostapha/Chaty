const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    from : {
        type : String ,
        ref : 'User'
    } ,
    to : {
        type : String ,
        ref : 'User'
    } ,
    date : {
        type : Date ,
        default : Date.now()
    } ,
    deleted : {
        type : Boolean ,
        default :false
    } ,
    status : {
        type : Number ,
        default : 1
    }
});

let Request = mongoose.model('Request' , requestSchema);

module.exports = Request;