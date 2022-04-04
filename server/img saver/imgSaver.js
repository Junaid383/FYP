const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const dir="./uploadsPics/";
//         cb(null, dir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname)
//     }
// })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })




const upload = multer({ storage: storage });
// const upload = multer({dest:"./uploads/"})



router.post('/adminnewProduct', upload.single('image'), async (req, res) => {
    console.log(req.file);
    const { image, name, stock, price, active } = req.body;
    console.log(req.body);
    if (!name || !stock || !price) {
        console.log("Fill all field");
        return (res.status(422).json({ error: "Filled All fields" }));

    }
    else{
      console.log("Registered");
    }
    // try {
    //     const prdExist = await PRD.findOne({ name: name });              //First from DB and 2nd from IP fields to check if same email exist or not 

    //     if (prdExist) {
    //         return (res.status(422).json({ error: "Product  exist" }));
    //     } else {

    //         const prd = new PRD({ image , name, stock, price, active });
    //         const prdReg = await prd.save();
    //         res.status(201).json({ message: "Product Entered" });
    //     }

    // } catch (err) {
    //     console.log(err);
    // }



});
module.exports = router; 