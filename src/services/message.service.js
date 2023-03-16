const Message = require("../models/message.models");


class MessageService {
    static async create(dataMessage) {
        try {
            const message = await Message.create(dataMessage)
            return(message)
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = MessageService