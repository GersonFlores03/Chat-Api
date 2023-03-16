const { logError, ormerrorHandle, errorHandle } = require("../controllers/middelwares/error.handle")



const errorHandleRouter = (app) => {
     app.use(logError)
     app.use(ormerrorHandle)
     app.use(errorHandle)

     app.use("*" , (req , res) => {
          return res
          .status(404)
          .send("Page no fount")
     })
} 

module.exports = errorHandleRouter