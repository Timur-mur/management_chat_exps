const ChatService = require('../service/chat.service')

module.exports = (app, io) => {

    io.on('connection', (socket) => {
        socket.on('join', async id =>{
            socket.join(id)
            console.log(id + ' joined to chat')
        })
        socket.on('chat', async (data) =>{
            io.emit('chat', {
                message: await ChatService.postTextMessage(data),
                from: data.from
            })
        })
        socket.on('leave', id => {
            socket.leave(id)
            console.log(id + ' leave this chat')
        })
    })
}