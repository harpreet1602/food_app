const mongoose  = require('mongoose');

const validator = require("email-validator");
const {db_link} = require('../secrets.js');
// destructuring
mongoose.connect(db_link).then(function(db){
    // console.log(db);
    console.log('db connected');
}).catch(function(err){
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:function(){
                // this mai pura object mil rha hai key konsi leni hai jo uspe padi hui value hogi
                return validator.validate(this.email);
            }
        }
    ,
        password:{
            type:String,
            required:true,
            min:8
        },
        confirmPassword:{
            type:String,
            require:true,
            min:8,
            validate:function(){
                return this.password == this.confirmPassword;
            }
        }
});

const userModel = mongoose.model('userModel',userSchema);

(async function createUser(){
    let user = {
        name:'Harpreet Singh',
        age:'19',
        email:'abcd@gmail.com',
        password:'1234567890',
        confirmPassword:'1234567890'
    };
    let userObj = await userModel.create(user);
    console.log(userObj);
})();



