const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

//! connect to Mongo
mongo.connect('mongodb://127.0.0.1/mongochat', { useUnifiedTopology: true }, (err, db) => {
    if(err) throw err;
    console.log('mongoDB connected...');

    //! connect to socket.io
    client.on('connection', (socket) => {
        let chat = db.db('mongochat').collection('chats');

        //! create function to send status
        sendStatus = function(s) {
            socket.emit('status', s);
        }

        //! get chats from mongo collection
        chat.find().limit(100).sort({_id: 1}).toArray((err, result) => {
            if(err) throw err;

            //! emit the messages
            socket.emit('output', result);
        });

        //! handle input events
        socket.on('input', (data) => {
            let name = data.name;
            let message= data.message

            //! check for name & message 
            if(name == "" || message == "") {
                sendStatus('please enter a name and message')
            } else {
                //! send message
                chat.insert({name: name, message: message}, () => {
                    client.emit('output', [data]);

                    //! send status object
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    });
                });
            }
        });

        //! handle clear 
        socket.on('clear', (data) => {
            //! remove all chats from collection
            chat.remove({}, () => {
                //! emit cleared
                socket.emit('cleared')
            })
        })

    });
});

