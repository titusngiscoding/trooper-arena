const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

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