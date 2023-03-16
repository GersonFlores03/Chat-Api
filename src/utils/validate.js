const {validationResult} = require("express-validator")


const validaResult = (req ,res , next) => {
  try {
       validationResult(req).throw
       return next()
  } catch (error) {
    next({
        status: 400,
        name: "Validation error",
        message: error.array().map((error) => error.msg),
    })
  }
};


module.exports = validaResult