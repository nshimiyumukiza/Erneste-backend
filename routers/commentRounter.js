import express from "express"
import CommentController from "../controllers/commentController.js"

const router = express.Router()
router.post("/:id",CommentController.postComment)


export default router