const {Router} = require("express")
const { UserLogin } = require("../controllers/auth.controllers")

const router = Router()

router.post("/api/v1/auth/login" , UserLogin )


module.exports = router