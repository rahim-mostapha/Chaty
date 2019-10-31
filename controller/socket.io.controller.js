module.exports  = function (app){
    var io = require("socket.io")(app);
    var fs = require("fs");
    var chat = io.of("/message");

    chat.on('connection' , socket => {
        socket.on('join' , (data) => {
            socket.join(data.room);
        });
    });
};