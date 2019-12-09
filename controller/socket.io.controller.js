module.exports  = function (app){
    let Message = require('../model/message.model');
    let io = require('socket.io')(app);
    let fs = require('fs');
    let chat = io.of('/chat');

    chat.on('connection' , socket => {
        // join to chat room 
        socket.on('join' , (data) => {
            socket.join(data.room);
        });

        // show everyone that there is some one sending message
        socket.on('new-message' , (data) => {
            console.log(data);
            if(data.type){
                let name = `/message_${data.type}/${Date.now()}.${data.extension}`;
                fs.writeFileSync("./public" + name, Buffer.from(new Uint8Array(data.message)));
                data.message = name;
            }
            data.status = 1;
            let message = new Message(data);
            message.save( (err , msgData ) => {
                data = msgData;
                // console.log(data);
                chat.to(data.room).emit('new-message',data);
            });
        });

        // show everyone that there is some one remove a message
        socket.on("remove-message" , function(data){
            Message.updateOne( {_id : data._id } ,{ deleted : true } , function(err, _ ){
                if(err){
                    chat.to(data.room).emit("remove-message" , {status : false});
                } else {
                    chat.to(data.room).emit("remove-message" , { _id :data._id , status : true});
                }
            });
        });

        // show everyone that there is some one see the message
        socket.on('message-recived' , (data) => {
            Message.updateOne({_id : data._id} , {status : 3} , _ => {
                socket.broadcast.to(data.room).emit('message-recived',data._id);
            });
        });

        // show everyone that there is some one type some thing
        socket.on('typing' , (data) => {
            // console.log(data);
            socket.broadcast.to(data.room).emit('typing',data._id);
        });

        // show everyone that there is some one end typing
        socket.on('typing-end' , (data) => {
            socket.broadcast.to(data.room).emit('typing-end',data._id);
        });
    });
};