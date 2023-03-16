const Conversation = require("../models/conversation.models")
const Message = require("../models/message.models")
const Users = require("../models/users.models")


class UserService {


    static async getUser(email){
        try {
            const user = await Users.findOne({
                where: {email}
            })
            return(user)
        } catch (error) {
            throw(error)
        }
    }

   static async findUser(){
      try {
        const user = await Users.findAll()
        return(user)
      } catch (error) {
         throw(error)
      }
   }

   static async findUser(id){
    try {
        const user = await Users.findByPk(id, {
           include: [
            {
              model: Conversation,
            }
           ]
        })
        return(user)
    } catch (error) {
        throw(error)
    }
   }


    static async createUser(userData){
        try {
            const newUser = await Users.create(userData)
            return(newUser)
        } catch (error) {
            throw(error)
        }
    }
}


module.exports= UserService;