const express = require('express');

exports.authSuccess = async(req, res)=>{
    
    if(!req.user){
        res.redirect('/api/auth/callback/failure');
    }else{
        res.send("Welcome " + req.user.email);

    }

} 
// failure
exports.authFailure = async(req, res) =>{
    res.send("Error");
}
  