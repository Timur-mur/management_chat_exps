const express = require('express')
const PORT = process.env.PORT ?? 3000
const cors = require('cors')
const {Server} = require('socket.io')

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: false}))

const http = require('http').createServer(app)
const io = new Server(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST']
    }
})

require('./controllers/chat.controller')(app, io)

http.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
})