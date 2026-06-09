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
app.post("/",(req,res)=>{
   let newStudent= new Student({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city
   })
   newStudent.save().then(
    ()=>{
        console.log("Saved")
        res.json({"message":"saved"})
    }
   ).catch((err)=>{
        console.log(err.message)
   })
})

app.get("/",(req,res)=>{
    Student.find().then(
        (result)=>{
            console.log()
        }
    )
})

app.listen(3000,()=>{
    console.log("Server is started....")
})
