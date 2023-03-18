const Conversation = require("../models/conversation.models");
const Participants = require("../models/participants.models")
const Message = require("../models/message.models")




class ConversationService {
   
    static async findConversation(){
        try {
            const newConversation = await Conversation.findAll()
            return(newConversation)
        } catch (error) {
            throw(error)
        }
    }

    static async obtain(id) {
        try {
            const conversation = await Conversation.findByPk(id , {
                include: [
                    {
                        model: Participants,
                        include: [
                            {
                                model: Message
                            }
                        ]
                        
                    }
                ]
            })
            return(conversation)
        } catch (error) {
            throw(error)
        }
    }

    
    static async create(data){
        try {
            const newConversation = await Conversation.create(data)
            return(newConversation)
        } catch (error) {
           throw(error)  
        }

    }

    static async delete(id){
        try {
            const deleteConversation = await Conversation.destroy({
                where:{id}
            })
             return(deleteConversation)
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = ConversationService