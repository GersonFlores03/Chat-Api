const {Router} = require("express");
const { CreateConversation, MostrarConversacion, obtainConversation } = require("../controllers/conversation.controller");

const router = Router();
router.get("/api/v1/conversation" , MostrarConversacion)
router.get("/api/v1/conversation/:id/message" , obtainConversation )
router.post("/api/v1/conversation" , CreateConversation)


module.exports = router;