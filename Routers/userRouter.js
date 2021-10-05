










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






userRouter.route(':/id')
    .get(getuser)
    .patch(bodychecker,updateUser).delete(bodyChecker,deleteUser);




// jasbir sir
async function getUsers(){
    
}

async function createUser(){

}

async function getUser(){
    let { id } = req.body;
    try{

    }
    catch{

    }
}
async function deleteUser(){

}
async function updateUser(){

}