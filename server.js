const express = require('express');
const app = express();
// const router = express.Router();
app.listen('5000',function(){
console.log('server listening on port 5000');
});

app.use(express.json());
app.use(express.static('public'));
const userRouter = express.Router();
const authRouter = express.Router();

app.use('/user',userRouter);
app.use('/auth',authRouter);
// mounting in express










const userRouter = express.Router();
app.use('/user',userRouter);

function setCreatedAt(req,res,next){
    let obj = req.body;
    // keys ka array -> uska length
    let length = Object.keys(obj).length;
    if(length == 0){
        // 400 error jab input empty ho
        return res.status(400).json({message:"cannot create user if req.body is empty"})
    }
    req.body.createdAt = new Date().toISOString();
    next();
    // next middleware chalao
    // sare function middleware hote hai express mai
    // createdAt karke key mangva li and then date ko ISO string mai kardo
}


const userModel = require('./models/userModel');
async function signupUser(req,res){
    try{
        let userObj =  req.body;

        let user = await userModel.create(userObj);
        console.log('user',user);
        res.json({
            message:'user signedUp',
            user:userObj
        });
    }
    catch(err){
        console.log(err);
        res.json({message: err.message})
    }
}



// redirects 
app.get('/user-all',(req,res)=>{
    res.redirect('/user');
});

// middleware function
// har baar chalta hai jab server ki file run hogyi agar aapke kaam mai hai to chalega otherwise ignore karta hai
// jab kisi route sai match na kare to error 404 page dikha rhe hai aakhir mai lagao yeh
// request pai jaha sai response mil jayega vhi sai chala jaega
// 404 page
app.use((req,res) => {
    res.sendFile('public/404.html',{root:__dirname});
});