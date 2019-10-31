const mongoose = require('mongoose');
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

const roomSchema = mongoose.Schema({
    name : {
        type : String ,
        default : randomName()
    } ,
    users : [{
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }],
    date : {
        type : Date ,
        default : Date.now()
    } ,
    group : {
        type : Boolean ,
        default : false
    } ,
    picture : {
        type : String ,
        default : "default.jpg"
    } 
});

let Room = mongoose.model('Room' , roomSchema);

module.exports = Room;

function randomName(){
    let name= '';
    for(let i = 0 ; i < 15 ; i++){
        name += alpha[Math.floor(Math.random()*62)];
    }
    return name;
}