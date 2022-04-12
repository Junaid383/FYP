
// const jwt = require("jsonwebtoken");
const User = require("../models/schema");
const PRD = require('../models/newProduct')


const authenticate = async (req, res, next) => {

    try {
        // const token = req.cookies.jwtoken;
        // console.log(token);
        // const verrifyToken = jwt.verify(token, process.env.SECRCET_KEY);
        // const rootUser = await User.findOne({ _id: verrifyToken._id, "tokens.token": token });

        // if (!rootUser) {
        //     throw new Error('User Not FOund');
        // }
        // req.token = token;
        // req.rootUser = rootUser;
        // req.userID = rootUser._id;

        next();

    } catch (err) {
        res.status(401).send("Unauthorized User");
        console.log(err);
    }
}



module.exports = authenticate;