const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstname : {
        type : String ,
        required : [true , 'firstname is required field']
    } ,
    lastname : {
        type : String ,
        required : [true , 'lastname is required field']
    } ,
    email : {
        type : String ,
        required : [true , 'email is required field'],
        unique : true,
        validate : {
            validator : (val) => /[a-zA-Z0-9\-\._]+\@[a-zA-Z0-9\-\._]{4,10}\.[a-zA-Z0-9\-\._]{2,6}/.test(val) ,
            message : prope => `${prope.value} : is not email`
        }
    } ,
    password : {
        type : String ,
        required : [true , 'password is required field'],
        validate : {
            validator : (val) => /[a-zA-Z0-9\-\._\+\@\#\$\*]{6,25}/.test(val) ,
            message : prope => `${prope.value} : this password is not valid`
        }
    } ,
    date : {
        type : Date ,
        default : Date.now()
    } ,
    profile : {
        type : String ,
        default : 'profile.jpg'
    } ,
    cover : {
        type : String ,
        default : 'cover.jpg'
    } ,
    active : {
        type : Boolean ,
        default : false
    } ,
    deleted : {
        type : Boolean ,
        default : false
    } 
});

userSchema.pre('save' , function (next) {
    if(!this.isModified('password')) return next();
    bcrypt.genSalt(10 , (err , salt) => {
        if(err) next(err);
        bcrypt.hash(this.password , salt , (error ,hash) => {
            if(error) next(error);
            this.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (hash , plane , cb) {
    bcrypt.compare(plane , hash , (err , res) => {
        if(res) cb(null , true);
        else cb(true , false);
    });
};

let User = mongoose.model('User' , userSchema);

module.exports = User;