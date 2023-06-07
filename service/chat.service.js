const {v4: uuidv4} = require('uuid')
const {raw} = require('express')
const axios = require('axios')

const postTextMessage = async (data) => {
    const formData = {
        user_id: data.from,
        user_name: data.user_name,
        user_avatar: data.user_avatar,
        type: data.type,
        text: data.text,
        send_time: data.send_time
    }
    await axios
        .post('http://127.0.0.1:8000/api/chat/save_message', formData)
        .then(response => {
            console.log('message was save')
        })
        .catch(error => {
            console.log(error.code)
        })
    return formData
}

const postFileMessage = async (messageFile, senderId) =>{
    const formData = {
        user_id: senderId,
        type: 2,
        text: messageFile
    }
    await axios
        .post('http://127.0.0.1:8000/api/chat/save_message', formData)
        .then(response => {
            console.log('message was save')
        })
        .catch(error => {
            console.log(error.code)
        })
    return formData
}

module.exports ={
    postTextMessage,
    postFileMessage
}