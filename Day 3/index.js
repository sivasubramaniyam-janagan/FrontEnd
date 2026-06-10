import express from 'express'
import mongoose from 'mongoose'
import Student from './models/student.js'
import studentRouter from  './routers/studentRouter.js'

const mongoURI = "mongodb://admin:GzqUacDa6qP0j0dM@ac-yzspfdr-shard-00-00.2mlu19f.mongodb.net:27017,ac-yzspfdr-shard-00-01.2mlu19f.mongodb.net:27017,ac-yzspfdr-shard-00-02.2mlu19f.mongodb.net:27017/?ssl=true&replicaSet=atlas-xj0ilt-shard-0&authSource=admin&appName=Cluster0"
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