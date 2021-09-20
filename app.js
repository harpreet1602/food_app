
const express = require('express');

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
    res.send('<h1>hello hi</h1>');
});





