import express from "express"
import {createUser, deleteUser, getSingleUsere, getUser, login, updateUser,} from "../controllers/user.controller.js" 
import { userAccountRule, validationRule } from "../midleware/validation.js"
import VelifyAccess from "../midleware/velify.js"

const router = express.Router()
router.post("/",userAccountRule(),validationRule,createUser)
router.get("/",getUser)
router.get("/:id",getSingleUsere)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.post("/login",login)
export default router
