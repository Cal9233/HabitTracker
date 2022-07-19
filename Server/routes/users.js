const router = require('express').Router(),
    User = require('../database/models/user'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs');


//Get Current User
router.get('user/me', async (req, res) => res.json(req.user));


//Login User
router.post('/user/login', async (req, res, next) => { 
    const { email, password } = req.body;
    const user = await User.find({email, password});
    try {
        if(!user){
            res.status(400).json({
                message: "Login not successful",
                error: error.message,
            });
        } else {
            res.status(200).json({
                message: "Login Successfuly",
                user,
            })
        }
    } catch (e){
        res.status(400).json({
            message: "An error occured",
            error: e.message,
        })
    }
});
//Register User
router.post('/user/register', async (req, res, next) => {
    const { name, password, email } = req.body;
    if(password < 4){
        return res.status(400).json({message: "Password must be greater than 4 characters"});
    }
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            res.status(200).json({
                message: "User successfully created",
                user
            });
        }).catch(e => console.log("error: ", e));
    } catch(e){
        res.status(401).json({
            message: "User not successful created",
            error: e.mesage,
        });
    }
});
//Delete User
router.delete('/user', async (req, res) => {
    const { email, password } = req.body;
    const user = User.find({email, password});
    if(!user){
        res.status(400).json({
            message: "User not found",
            error: 'User does not exist'
        });
    }
    try {
        await User.findOneAndRemove({email, password})
        .then(data => {
            res.status(200).json({
                message: "User Successfully Deleted",
                data
            });
        }).catch(e => {
            res.status(400).json({
                error: e.message
            });
        });
    } catch(e){
        res.status(400).json({
            error: e.message
        });
    }
});

module.exports = router;