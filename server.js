const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')
const { Server } = require('socket.io');

const io = new Server();

io.on('connection', (socket) => {
  console.log('Un nuevo cliente se ha conectado');
});

io.listen(3000);
