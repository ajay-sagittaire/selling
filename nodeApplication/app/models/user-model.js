const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    DOB:String,
    dept:String,
    gender:String,
    age:Number
});


console.log("here in model");

// const personSchema = mongoose.Schema({
//     puppy:String,
//     tommy:String,
//     baby:String
// });


const User = mongoose.model('User',userSchema);

var userModel = {
   getAllUser:getAllUser,
   addUser:addUser,
   updateUser:updateUser,
   deleteUser:deleteUser
}

function getAllUser(callback) {
      User.find({},function(err, resu){   // here touching database.....
       // res.send("all the data");
          if(err) {
          callback (err,null);            // callback send data back to service
        }
        console.log("hello");
        // console.log(resu);
        callback(null,resu);
    });
}

function addUser(user,callback) {
    
        var pp = new User(user);
        pp.save(function(err,result){
        if(err) {
            callback (err,null);
          //return err;
        }
         callback(null,result);
       //return result;


    });
}


function updateUser(id,user,callback) {
        console.log("before", new Date());
        User.update({_id:id}, user, null, function(err,result){
        if(err) {
            callback (err,null);
          //return err;
        }
         console.log("after", new Date());
         callback(null,result);
       //return result;


    });
}

function deleteUser(id,callback) {
    
    User.remove({_id:id}, function(err,result){
        if(err) {
            callback(err,null);
        }
        callback(null,result);
       
    });
}


module.exports = userModel;

