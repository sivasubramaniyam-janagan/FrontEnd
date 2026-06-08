import express from 'express';
import mongoose  from 'mongoose';
let app = express();
let mongoDB=""
app.use(express.json())
mongoose.connect(mongoDB).then(
    ()=>{
        console.log("connected to mongoDB")
    }
)


app.listen(3000,() => {
    console.log("Server is ...");
});
