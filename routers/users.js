import express from 'express'
import { createUser, getUser, chooseUser, deleteUser, updateUser } from '../controlers/userControl.js'


const router = express.Router()



router.get("/", getUser)
router.post("/", createUser)

router.get("/:id", chooseUser)

router.delete("/:id", deleteUser)

router.patch("/:id", updateUser)

export default router;