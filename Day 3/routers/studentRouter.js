import express from 'express'

const studentRouter = new express.Router();

studentRouter.get("/",()=>{
    console.log("get requesst for student received")
})

export default studentRouter