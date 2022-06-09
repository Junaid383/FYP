

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { stringify } = require('querystring');


const orders = new mongoose.Schema({
    loggedInUserName: {
        type: String,
        // required: true
    },
    subTotal: {
        type: Number,
        // required: true
    },
    discountedAmount: {
        type: Number,
        // required: true
    },
    total: {
        type: Number,
        // required: true
    },
    orderID:{
        type : String,
        // required: true
    },
    custmerID:{
        type: String,
        // required: true

    },
    status:{
        type: String,
    }
   

});

const ORDERS = mongoose.model('Orders', orders);

module.exports = ORDERS;