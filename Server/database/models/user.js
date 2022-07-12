const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true, 
            lowercase: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("email is invalid");
                }
            }
        },
        password: {
            type: String,
            required: true,
            trime: true,
            validate(value){
                if(value.toLowerCase().includes("password")){
                    throw new Error("can't be password");
                } 
                if(value.length < 6) {
                    throw new Error("password must be at least 6 characters long")
                }
            }
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
    }
);

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email});
    if(!user) throw new Error("User does not exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");
    return user;
}