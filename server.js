const express = require('express');
const app = express();
// const router = express.Router();
app.listen('5000',function(){
console.log('server lisrening on port 5000');
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
userRouter.;

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