const config = require('../config.json'),
    { secret } = config,
    jwt = require("jwt");

exports.verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(401).send("Access Denied/ UnAuthorized");

    try {
        token.split(' ')[1] //removing 'Bearer' from token
        if(token === null || !token) return res.status(401).send("Unauthorized request");

        req.user = verifiedUser; //user_id && user_type_id
        next();
    } catch(e){
        res.status(400).send("Invalid Token");
    }
}