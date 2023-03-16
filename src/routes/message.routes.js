const {Router} = require("express");
const { CreateMessage } = require("../controllers/message.controllers");
const router = Router();

router.post("/api/v1/message" , CreateMessage)

module.exports = router;
