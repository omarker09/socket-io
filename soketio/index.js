const express = require("express")();
const server = require("http").createServer(express);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});
const port = 5000;

io.on("connection", (socket) => {
    console.log('somene joined');
    socket.on("chat", (payload) => {
        console.log(payload);
        io.emit("chat", payload)
    });
});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});

