const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    io.emit('news','A Trooper has come.');
    socket.on('say', (message) => {
        io.emit('news', message);
    });
    socket.on("disconnect", ()=>{
        io.emit('news', 'A Trooper has left.');
    })
});

server.listen(PORT);

setInterval(() => {

}, 1000/60);