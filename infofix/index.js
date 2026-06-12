import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import express from "express";
import jwt from "jsonwebtoken"

const app = express()
const DBuri=""
mongoose.connect(DBuri).then(
    ()=>{console.log("database connected")}
).catch((err)=>{
    console.log("not connected")
})

app.use(express.json())

app.use(
    (req,res,next)=>{
        const head = req.headers.authorization
        if (head!=null){
            const token = head.replace("Bearer ","")
            console.log(token)
            jwt.verify(token,"infofix",
                (error,decoded)=>{
                  if (decoded==null){
                        res.json({
                            message:"invalid token login again"
                        })
                  }
                  else{
                    req.user=decoded
                    next()
                  }



                }
            )
            
        }
        else{
            next()
        }

    }
    
)

app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log("coneected")
})