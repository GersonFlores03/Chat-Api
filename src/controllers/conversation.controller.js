const ConversationService = require("../services/conversation.service")


const MostrarConversacion = async (req , res) => {
    try {
        const conversation = await ConversationService.findConversation()
        res.json(conversation)
    } catch (error) {
        res.status(400).json(error)
    }
}

const obtainConversation = async (req , res) => {
    try {
        const {id} = req.params;
        const conversation = await ConversationService.obtain(id)
        res.json(conversation)
    } catch (error) {
        throw(error)
    }
}



const CreateConversation = async (req ,res) => {
    try {
        const data = req.body;
        const conversation = await ConversationService.create(data)
        res.status(201).json(conversation)
    } catch (error) {
        res.status(400).json(error)
    }
}

const ConversationDelete = async (req , res) => {
    try {
        const {id} = req.params
        const result = await ConversationService.delete(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports= {
  MostrarConversacion,
  CreateConversation,
  obtainConversation,
  ConversationDelete
}
