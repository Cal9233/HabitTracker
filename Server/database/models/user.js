const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require("jsonwebtoken");
const config = require("../../config.json");
const bcrypt = require("bcryptjs");
const Habits = require("./habits");

const userSchema = new Schema(
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
    },
    {
        timestamps: true
    }
);

userSchema.virtual('habits', {
    ref: 'Habits',
    localField: '_id',
    foreignField: 'ownerId'
});

userSchema.pre("save", async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

userSchema.methods.generateToken = () => {
    const user = this;
    const { secret } = config;
    const token = jwt.sign(
        { _id: user._id.toString(), name: user.name }, 
        secret,
        { expiresIn: '7d'}
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email});
    if(!user) throw new Error("User does not exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");
    return user;
}

const User = mongoose.model('user', userSchema);

module.exports = User;