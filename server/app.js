var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const PORT = 3000;

io.on('connection', function (socket) {
    console.log('a user connected '+socket.id);
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.emit('welcome');
    socket.on('message', (payload)=> console.log(payload.messageText))
    socket.on('action', (payload)=>{
        console.log(payload.action);
        socket.emit('actions', {
            action: payload.action
        })
        socket.broadcast.emit('actions', {
            action: payload.action
        })
    })
});

server.listen(PORT, () => {
    console.log('Server listened on port ' + PORT);
});