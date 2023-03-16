const {Router} = require("express");
const { CreateUser, MostrarUser, obtainUser } = require("../controllers/users.controllers");
const { createUserValidator } = require("../controllers/validators/use.validator");


const router = Router();
router.get("/api/v1/users" , MostrarUser )
router.get("/api/v1/users/:id/conversation" , obtainUser )
router.post("/api/v1/users" ,  CreateUser)



module.exports= router

