const passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    jwt = require('jsonwebtoken'),
    config = require('../config.json'),
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../database/models/user');

const { secret } = config;

let jwtOptions = {
    jwtFromRequest: (req) => {
        if(!req.url.includes("/api")){
            const token = jwt.sign({ react_app: true }, secret);
            return token;
        }
        return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme("jwt")(req);
    },
    secretOrKey: secret,
};

passport.use(
    "jwt",
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
        if(jwtPayload.react_app){
            return done(null, true);
        }
        if(Date.now() > jwtPayload.expires){
            return done(null, false, { message: "jwt expired" });
        }
        let { iat, exp, ...userData } = jwtPayload;
        userData = await User.findById(userData._id);
        return done(null, userData);
    })
);

module.exports = passport;