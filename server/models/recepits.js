

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { stringify } = require('querystring');


const recepits = new mongoose.Schema({
    loggedInUserName: {
        type: String,
        // required: true
    },
    cartProducts: [{
        id:{
        type: String,
        // required: true
    },image:{
        type: String,
        // required: true
    },name:{
        type: String,
        required: true
    },stock:{
        type: String,
        required: true
    },price:{
        type: String,
        required: true
    },qty:{
        type: String,
        required: true
    }
    }],

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
    completeData:{
        type : String,
        // required: true
    },
    completeTime:{
        type: String,
        // required: true

    },
    status:{
        type:String,
    },
    orderID:{
        type:String,
    },
    custmerID:{
        type: String
    },
    loggedInUserID:{
        type:String
    }

});

const RECEPITS = mongoose.model('Recepits', recepits);

module.exports = RECEPITS;