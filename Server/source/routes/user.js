let express = require('express');
let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js');
const router = express.Router();


router.post('/users/signup',(req,res,next) => {

    userModel.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message: "Username already exists......"
            });
        }else{
            userModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message: "Mail Id already exists......"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if(err){
                    return res.status(500).json({
                        error : err
                    });
                }
                else{
                    const user = new userModel({
                        _id: new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        email: req.body.email,
                        password:hash
                    });
                    user
                    .save()
                    .then(result=>{
                        
                        res.status(201).send(result)
        
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).json({
                            error:err
                        });
        
                    });
                }
        
            });
           
        }
    })
    

        }
    });
    
});

router.post('/users/login',(req,res,next) => {
    userModel.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length<1){
            return res.status(401).json({
                message:"Authentication failed (no such username)......"
            });
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                return result.status(401).json({
                    message:"Authentication failed (password not match error)......"
                });
            }
            if(result){
                
                const token = jwt.sign(
                {
                    username:user[0].email,
                    userId:user[0]._id
                },
               "in is the only way out",
                {
                    expiresIn:"2h"
                })
                return res.status(200).json({
                    message:"Authentication successful you are logged in......",
                    token:token
                }); 

            }
            res.status(401).json({
                message:'Authentication failed (password not match)......'
            });

        });

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

module.exports = router;

