import express from "express"
import { createImage, deleteImage, dislikeImage, getImage, getOneImage, imageLikes, updateImage } from "../controllers/image.controller.js"
import VelifyAccess from "../midleware/velify.js"
import upload from "../midleware/multer.js"

const router = express.Router()

router.post("/",upload.single("image"),createImage)
router.get("/",getImage)
router.get("/:id",getOneImage)
router.put("/:id",updateImage)
router.delete("/:id",deleteImage)
router.put("/like/:id",VelifyAccess("user"),imageLikes)
router.put("/dislike/:id",VelifyAccess("user"),dislikeImage)

export default router