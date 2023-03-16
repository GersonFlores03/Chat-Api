const UserService = require("../services/users.service")
const bcrypt = require("bcrypt")

const UserLogin = async (req , res , next) => {
    try {
        const {email , password} = req.body;
        const user = await UserService.getUser(email)
        if(!user){
          return next({
            status: 400,
            message: "invalid email",
            error: "User not found"
           })
        }
      
        const isValid = await bcrypt.compare(password , user.password)
        if(!isValid){
            return next({
                status: 400,
                message: "The password doesn't match with email user",
                error: "Invalid password",
               })
        }
        const {id , username , firstname , lastname , url} = user;
        res.json({
            id,
            username,
            email,
            firstname,
            lastname,
            url
        });

    } catch (error) {
        next(error)
    }
}

module.exports = {
    UserLogin
}