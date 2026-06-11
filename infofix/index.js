import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import express from "express";

const app = express()
const DBuri=""

mongoose.connect(DBuri).then(
    console.log("database connected")
).catch((err)=>{
    console.log("not connected")
})

app.use(express.json())
app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log("coneected")
})