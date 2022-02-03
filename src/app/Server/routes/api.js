const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const db = "mongodb+srv://userpriya:pwpriya@user.3mhqu.mongodb.net/Events?retryWrites=true&w=majority"

mongoose.connect(db, err=>{
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})

Router.get('/', (req, res) =>{
    res.send('API from route')
})

Router.post('/register' , (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) =>{
        if(error){
            console.log(error)
        }else{
            let payload = {subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

Router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('invalid password')
                }else{
                    let payload = {subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

Router.get('/events', (req,res) =>{
    let events = [
        {
            "id" : 1,
            "name": "Auto",
            "description": "loream ipsom",
           
        },
        {
            "id" : 2,
            "name": "Car",
            "description": "loream ipsom",      
           
        }
    ]
    res.json(events)
})

module.exports = Router