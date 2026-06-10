import express from 'express'
import {getStudent} from '../controllers/studentController.js'

const studentRouter = express.Router();

studentRouter.get("/",getStudent)

export default studentRouter