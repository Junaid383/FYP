

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


const newProduct = new mongoose.Schema({
    image:
    {
        type: String,
        required: true
        
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Number,
        // required: true
    },
   
    

});

const PRD = mongoose.model('Product', newProduct);

module.exports = PRD;