const router = require('express').Router(),
    User = require('../database/models/user'),
    jwt = require('jsonwebtoken'),
    config = require('../config.json'),
    { secret } = config,
    bcrypt = require('bcryptjs');


//Get Current User
router.get('/user/me', async (req, res) => res.json(req.user));


//Login User
//route 1
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
            let payload = { id: user._id, user_type_id: user.user_type_id };
            const token = jwt.sign(payload, secret);
            res.status(200).header("auth-token", token).send({ "token": token });
            // res.status(200).json({
            //     message: "Login Successfuly",
            //     user,
            // })
        }
    } catch (e){
        res.status(400).json({
            message: "An error occured",
            error: e.message,
        })
    }
});

//route 2
// router.post('/user/login', async (req, res) => {
//     User.findOne({ email: req.body.email }, async (err, user) => {
//         if (err) {
//             console.log(err)
//         } else {
//             if (user) {
//                 const validPass = await bcrypt.compare(req.body.password, user.password);
//                 //if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

//                 // Create and assign token
//                 let payload = { id: user._id, user_type_id: user.user_type_id };
//                 const token = jwt.sign(payload, secret);

//                 res.status(200).header("auth-token", token).send({ "token": token });
//             }
//             else {
//                 res.status(401).send('Invalid mobile')
//             }

//         }
//     })
// });

//Register User
//route 1
// router.post('/user/register', async (req, res, next) => {
//     const { name, password, email } = req.body;
//     if(password < 4){
//         return res.status(400).json({message: "Password must be greater than 4 characters"});
//     }
//     try {

//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             res.status(200).json({
//                 message: "User successfully created",
//                 user
//             });
//         }).catch(e => console.log("error: ", e));
        
//     } catch(e){
//         res.status(401).json({
//             message: "User not successful created",
//             error: e.mesage,
//         });
//     }
// });

//route 2
router.post('/user/register', async (req, res) => {
    //hash password
    const pass = await bcrypt.genSalt(10);
    const hasPass = await bcrypt.hash(req.body.password, pass);

    //create user
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hasPass,
        user_type_id: req.body.user_type_id
    });

    //save user
    user.save((err, registeredUser) => {
        if(err){
            console.log("error: ", err);
        } else {
            let payload = { id: registeredUser._id, user_type_id: req.body.user_type_id || 0 };
            const token = jwt.sign(payload, secret);
            res.status(200).send({ token });
        }
    });
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

router.delete('/user/logout', async (req, res, next) => {
    try {
        User.findById(req.user_type_id).then((resUser) => {
            resUser.online = false;
            resUser.save();
        });
        req.logout();
    } catch(e){
        res.status(400).json({
            error: e.message
        });
    }
});

module.exports = router;