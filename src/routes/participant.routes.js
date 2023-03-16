const {Router} = require("express");
const { CreateParticipant } = require("../controllers/participant.controller");
const router = Router();

router.post("/api/v1/participants" , CreateParticipant)

module.exports = router;