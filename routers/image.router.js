import express from "express"
import { createImage, deleteImage, getImage, getOneImage, updateImage } from "../controllers/image.controller.js"

const router = express.Router()

router.post("/",createImage)
router.get("/",getImage)
router.get("/:id",getOneImage)
router.put("/:id",updateImage)
router.delete("/:id",deleteImage)

export default router