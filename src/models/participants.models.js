const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Participants = db.define("participants" , {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },

     participants: {
        type: DataTypes.TEXT,
        allowNull: false
     },
 
    user_participant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    conversation_participant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    participants_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

} ,{
  timestamps: true
})

module.exports = Participants;