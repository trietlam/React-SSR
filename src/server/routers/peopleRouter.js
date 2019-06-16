import express from "express"
import { getPeopleHandler } from "../controller/peopleController"

const router = express.Router()

router.get("/", getPeopleHandler)

export default router
