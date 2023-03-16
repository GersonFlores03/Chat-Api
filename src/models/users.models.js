const {DataTypes} = require("sequelize")
const bcrypt = require("bcrypt")
const db = require("../utils/database")

const Users = db.define("users" , {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },

     username: {
        type: DataTypes.STRING(50),
        allowNull: false
     },

     email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
     },

     password: {
        type: DataTypes.STRING,
        allowNull: false,
        
     },

     firstname:{
        type: DataTypes.STRING(50),
        allowNull:false
     },

     lastname:{
        type: DataTypes.STRING(50),
        allowNull: false
     },

     url:{
        type: DataTypes.STRING(200),
        allowNull: false
     }

} , {
   hooks: {
      beforeCreate: async (user) =>{
         try {
            const salt = await bcrypt.genSalt(10)
            const passwordBcrypt = await bcrypt.hash(user.password , salt)
            user.password = passwordBcrypt
         } catch (error) {
            throw(error)
         }
      }
   }
});


module.exports= Users;