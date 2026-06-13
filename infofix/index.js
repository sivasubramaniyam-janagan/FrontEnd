import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import express from "express";
import jwt from "jsonwebtoken"
import { authenticateUser} from "./middlewares/authentication.js";
import productRouter from "./routers/productRouter.js";
const app = express()
const DBuri="mongodb://admin:@ac-yzspfdr-shard-00-00.2mlu19f.mongodb.net:27017,ac-yzspfdr-shard-00-01.2mlu19f.mongodb.net:27017,ac-yzspfdr-shard-00-02.2mlu19f.mongodb.net:27017/?ssl=true&replicaSet=atlas-xj0ilt-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(DBuri).then(
    ()=>{console.log("database connected")}
).catch((err)=>{
    console.log("not connected")
})

app.use(express.json())

app.use(authenticateUser)

app.use("/users",userRouter)
app.use("/products",productRouter)

app.listen(3000,()=>{
    console.log("coneected")
})