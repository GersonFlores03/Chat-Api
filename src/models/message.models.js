const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Message = db.define("message" , {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },

     content: {
        type: DataTypes.TEXT,
        allowNull: false
     },

     conversation_id: {
         type: DataTypes.INTEGER,
         allowNull: false
     },

     user_id:{
        type: DataTypes.INTEGER,
        allowNull:false
     }
},{
   timestamps: false
})

module.exports= Message;