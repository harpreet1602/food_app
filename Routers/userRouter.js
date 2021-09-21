










// let flag=true; User loggedin
function protectRoute(req,res,next){
    try{
        
    if(flag){
        next();
    }
    else{
        res.json({
            message:"operation not allowed"
        });
    }
    }
}