const express = require('express');

exports.authSuccess = async(req, res)=>{
    
    if(!req.user){
        res.redirect('http://localhost:4000');
        res.send({success:false});
        console.log("HELLo");
    }else{
        res.redirect('http://localhost:4000/login');
        res.send("Welcome " + req.user.email);
        res.send({success:true});


    }

} 
// failure
exports.authFailure = async(req, res) =>{
    res.send("Error");
}
  