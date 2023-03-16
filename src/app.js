const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./utils/database")
const initModels = require("./models/initmodels")
const userRouter = require("./routes/users.routes")
const conversationRouter = require("./routes/conversation.routes")
const messageRouter = require("./routes/message.routes")
const participantRouter = require("./routes/participant.routes")
const UserLogin = require("./routes/auth.routes")
const errorHandleRouter = require("./routes/errorHandle.routes")

initModels();

const app = express();
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000;

db.authenticate()
.then(()=> {
    console.log("Base de datos auntenticada")
})
.catch((error) => {
    console.log(error)
})


db.sync({alter: true})
.then(()=> {
    console.log("Base de datos sincronizada")
})
.catch((error) => {
    console.log(error)
})
 
app.use(userRouter)
app.use(conversationRouter)
app.use(messageRouter) 
app.use(participantRouter)
app.use(UserLogin)




app.get("/" , (req , res) => {
    res.send("Hola Mundo de Gerson")
})

errorHandleRouter(app)


app.listen(PORT , () => {
    console.log(`Welcome Servidor de Gerson ${PORT}`)
})
