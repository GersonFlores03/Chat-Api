const Users = require("../models/users.models")
const Conversation = require("../models/conversation.models")
const Message = require("../models/message.models")
const Participants = require("../models/participants.models")


const initModels = () => {
    
    Users.hasMany(Conversation , {foreignKey: "users_id"})
    Conversation.belongsTo(Users , {foreignKey: "users_id"})

    Users.hasMany(Message , {foreignKey: "user_id"})
    Message.belongsTo(Users , {foreignKey: "user_id"})

    Users.hasMany(Participants , {foreignKey: "user_participant"})
    Participants.belongsTo(Users , {foreignKey: "user_participant"})

    Conversation.hasMany(Message , {foreignKey: "conversation_id"})
    Message.belongsTo(Conversation , {foreignKey: "conversation_id"})

    Conversation.hasMany(Participants , {foreignKey: "conversation_participant"})
    Participants.belongsTo(Conversation, {foreignKey: "conversation_participant"})

    Message.hasMany(Participants , {foreignKey: "participants_id"})
    Participants.belongsTo(Message , {foreignKey: "participants_id" })

}


module.exports= initModels;