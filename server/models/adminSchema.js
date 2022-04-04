
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],

});

// {
//     "username": "ali",
//     "name":"Ali Asad",
//     "email":"ali@gmail.com",
//     "password":"12345678",
//     "phone": 923166201209,
//     "address":"Lahore"
// }


adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);

        // console.log("Hi from HASH inside ");
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        //confirm password
    }
    next();
});

adminSchema.methods.generateAuthToken = async function () {
    try {
        let tokenGen = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: tokenGen });
        await this.save();
        return tokenGen;


    } catch (err) {
        console.log(err);

    }

}



const ADMIN = mongoose.model('ADMIN', adminSchema);

module.exports = ADMIN;