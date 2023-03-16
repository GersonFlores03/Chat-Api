const MessageService = require("../services/message.service")


const CreateMessage = async (req , res) => {
    try {
        const dataMessage = req.body;
        const message = await MessageService.create(dataMessage)
        res.status(201).json(message)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    CreateMessage
}