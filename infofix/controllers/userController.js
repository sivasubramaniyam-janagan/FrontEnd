import User from '../modules/user.js'
import bcrypt from 'bcrypt'

export async function createUser(req,res) {

    try{

        
        const newUser=new User({
            email : req.body.email,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            password : req.body.password
        })

        await newUser.save()

        res.json({
            message : "user created succesfully"
        })
    }
    catch(err){
        res.json({
            message:"error creating user",
            error:err
        })
    }
}


export async function loginUser(req, res) {
    try {
        const user = await User.findOne({
            email:req.body.email
        })
    }
    catch(err){

    }

    if (user==null){
        res.json({
            message:"user not found"
        })
    }
    else{
        
    }
}