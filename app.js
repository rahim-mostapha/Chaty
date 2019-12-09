require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chat = require('./controller/socket.io.controller');
const app = express();

// database connection
mongoose.connect(process.env.DATABASE_URL , { useNewUrlParser : true , useUnifiedTopology : true});

const DB = mongoose.connection;

// set cors for outside access
app.use(cors());

// make public static file
app.use(express.static('./public'));

// parse form body
app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({limit : '50mb' , extended : true}));

// check database connection error
DB.on('error' , error => {
    console.error(`database connection error : ${error}`);
});
const port = process.env.PORT || 3000;
DB.once('open' , () => {

    // set user controller
    app.use('/user' , require('./controller/user.controller'));
    // set message controller
    app.use('/message' , require('./controller/message.controller'));
    // set request controller
    app.use('/request' , require('./controller/request.controller'));
    // set room controller
    app.use('/room' , require('./controller/room.controller'));

    // view all
    app.get('*' , (req , res) => {
        res.sendFile(path.join(__dirname , 'public/index.html'));
    });

    let server = app.listen(port , (error) => {
        if(error) console.error(`app listen error : ${error}`);
        else console.log(`check --> http://localhost:${port}`);
    });
    chat(server);
});