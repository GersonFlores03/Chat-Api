const UserService = require("../services/users.service")


const MostrarUser = async (req , res) => {
  try {
    const user = await UserService.findUser()
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }

}

const obtainUser = async (req ,res) => {
  try {
    const {id} = req.params;
    const result = await UserService.findUser(id)
    res.json(result)
  } catch (error) {
     res.status(400).json(error)
  }
}



const CreateUser = async (req , res) => {

    try {
        const userData = req.body
        const user = await UserService.createUser(userData)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {
    obtainUser,
    MostrarUser,
    CreateUser,
    
    
    
}