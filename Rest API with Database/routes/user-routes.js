import express from 'express'

import { getAllUser, login, signup } from "../controller/user-controller.js";

const router = express.Router();

router.get("/users",getAllUser)
router.post("/signup",signup)
router.post("/login",login)
export default router;