const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Conversation = db.define("conversation" , {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },

     title:{
        type: DataTypes.STRING(100),
        allowNull: false
     },

     cluster:{
         type: DataTypes.BOOLEAN,
         allowNull: false
     },

     users_id: {
        type: DataTypes.INTEGER,
        allowNull: false
     }


} , {
 timestamps: true,
 updatedAt: false,
 createdAt: "created_at"
 
});

module.exports= Conversation;