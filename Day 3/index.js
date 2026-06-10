import express from 'express'
import mongoose from 'mongoose'
import Student from './models/student.js'
import studentRouter from  './routers/studentRouter.js'

const mongoURI = "mon"
const app = express()

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected  to monngoDB")
    }
).catch((err)=>
    console.log("connection failed"+err.message)
)

app.use(express.json())
app.use("/students",studentRouter);



app.listen(3000,()=>{
    console.log("Server is started....")
})
