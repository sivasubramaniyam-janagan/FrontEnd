import jwt from "jsonwebtoken"
export function authenticateUser(req,res,next){
        const head = req.headers.authorization
        if (head!=null){
            const token = head.replace("Bearer ","")
            
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