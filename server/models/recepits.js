

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { stringify } = require('querystring');


const recepits = new mongoose.Schema({
    loggedInUserName: {
        type: String,
        // required: true
    },
    cartProduct: [{
        type: Object,
        required: true
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

    }
    

});

const RECEPITS = mongoose.model('Recepits', recepits);

module.exports = RECEPITS;