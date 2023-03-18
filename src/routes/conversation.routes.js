const {Router} = require("express");
const { CreateConversation, MostrarConversacion, obtainConversation, ConversationDelete } = require("../controllers/conversation.controller");

const router = Router();
router.get("/api/v1/conversation" , MostrarConversacion)
router.get("/api/v1/conversation/:id/message" , obtainConversation )
router.post("/api/v1/conversation" , CreateConversation)
router.delete("/api/v1/conversation/:id" , ConversationDelete )


module.exports = router;