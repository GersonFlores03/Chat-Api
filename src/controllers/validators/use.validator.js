const { check } = require("express-validator");
const validaResult = require("../../utils/validate");



const createUserValidator = [
    check("username" , "El nombre de usuario no debe estar vacio")
    .exists()
    .withMessage("El username debe exitir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({min: 10 , max: 30})
    .withMessage("El username debe tener 10 caracteres"),
    check("email" , "Error en el correo electronico")
    .exists()
    .whitelist("El correo debe existir")
    .notEmpty()
    .withMessage("El correo no debe estar vacio")
    .isString()
    .withMessage("El correo debe ser un string")
    .isEmail()
    .withMessage("No tiene formato de correo"),
    check("password" , "Error en la contraseña" )
    .exists()
    .notEmpty()
    .isString() 
    .isLength({min: 7 , max:15})
    .withMessage("La contraseña debe tener un longitud de 7 a 15 caracteres "),
    (req ,res , next) => {
        validaResult(req , res ,next)
    }
    

]

module.exports = {
  createUserValidator
}