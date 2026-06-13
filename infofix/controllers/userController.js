import User from '../modules/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function createUser(req,res) {

    try{

        const passwordHash=bcrypt.hashSync(req.body.password,10)
        const newUser=new User({
            email : req.body.email,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            password : passwordHash
        })

        await newUser.save()

        res.status(201).json({
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
    let user
    try {
         user = await User.findOne({
            email:req.body.email
        })
    }
    catch(err){
        res.json({
            message:"something went wrong"
        })
    }

    if (user==null){
        res.status(404).json({
            message:"user not found"

        })
    }
    else{
        const isValid=bcrypt.compareSync(req.body.password,user.password)
        if (isValid){
            
        const payload={
            email:user.email,
            firstname:user.firstname,
            lastname:user.lastname,
            isAdmin:user.isAdmin,
            isBlocked:user.isBlocked,
            isEmailVerified:user.isEmailVerified
        }


        const token = jwt.sign(payload, "infofix", {
                 expiresIn: "1000000s"
                });
        console.log(token)
    
        res.json({
            message:"login succesfull",
            mewtoken:token
                     })

        }
        
    }
}

export function isAdmin(req){
    if(req.user==null){
        return false
    }
    if (req.user.isAdmin){
        return true
    }
    else{
        return false
    }
}