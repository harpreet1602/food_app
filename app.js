
const express = require('express');
// server is like a restaurant and client is the customer
// customer requests something from the restaurant and get a response.

// server creation
const app = express();
let port = '8080';
// server suno yha pai
app.listen(port, function(){
    console.log(`server is listening on port ${port}`);
});

// types of request -> get post put delete
// ispe / pai request mari to hume kya karna hai bhejna hai
app.get('/',(req,res) => {
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    console.log("hello from the main page");
    res.send('<h1>hello hi</h1>');
});

let user = {
    name:"Harpreet Singh"
};
app.get("/users",function(req,res){
    console.log("user");
    res.json(user);
});

app.get("/home",function(req,res){
    console.log(__dirname);
    res.sendFile("./views/index.html",{root:__dirname});
});
app.use(express.json());
// after using the express.json format then only we will get data in post method from req.body
// in post we can put some data and that changed data will be fetched here.
app.post('/users',(req,res)=>{
    user = req.body;
    console.log(req.body);
    res.send('data has been added successfully');
})



