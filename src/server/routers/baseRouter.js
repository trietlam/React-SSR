import express from 'express'
import { handleRender } from '../controller/baseController'
const router = express.Router()

router.use('/', handleRender)

export default router
