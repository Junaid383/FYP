const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

// const upload = multer({ storage: storage });
const upload = multer({dest:"./uploads/"})


//DB connection which is required
require("../database/conn");
//  console.log("DB linked");
const EMP = require('../models/schema');
const PRD = require('../models/newProduct')
// console.log("chema linked");


router.get('/', (req, res) => {
    res.send("Hello World From Server auth. js");
});


router.post('/newUser', async (req, res) => {

    const { username, name, email, password, cpassword, phone, address } = req.body;
    console.log(req.body);
    if (!username || !name || !email || !password || !cpassword || !phone || !address) {
        console.log("Fill all field");
        return (res.status(422).json({ error: "Filled All fields" }));

    }

    try {
        const empExist = await EMP.findOne({ email: email });              //First from DB and 2nd from IP fields to check if same email exist or not 

        if (empExist) {
            return (res.status(422).json({ error: "Email  exist" }));
        } else if (password != cpassword) {
            return (res.status(422).json({ error: "PWD Not matched" }));

        } else {

            const emp = new EMP({ username, name, email, password, cpassword, phone, address });
            const empReg = await emp.save();
            res.status(201).json({ message: "EMP registered" });
        }

    } catch (err) {
        console.log(err);
    }


});

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Filled all fields" });
        }
        const empLog = await EMP.findOne({ email: email });
        // console.log(empLog);

        if (empLog) {
            const isMatch = await bcrypt.compare(password, empLog.password);

            const token = await empLog.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258920000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "Logged IN" });

            }

        } else {
            res.status(400).json({ error: "Invalid" });

        }




    } catch (err) {
        console.log(err);
    }
});


//...................................................ADMIN................................//

router.post('/admin/newProduct', upload.single('image'), async (req, res) => {
    console.log(req.file);
    const { image, name, stock, price, active } = req.body;
    console.log(req.body);
    if (!name || !stock || !price) {
        console.log("Fill all field");
        return (res.status(422).json({ error: "Filled All fields" }));

    }
    try {
        const prdExist = await PRD.findOne({ name: name });              //First from DB and 2nd from IP fields to check if same email exist or not 

        if (prdExist) {
            return (res.status(422).json({ error: "Product  exist" }));
        } else {

            const prd = new PRD({ image: req.file.path , name, stock, price, active });
            const prdReg = await prd.save();
            res.status(201).json({ message: "Product Entered" });
        }

    } catch (err) {
        // console.log("err");
        console.log(error);
    }



});


router.get('/admin', authenticate, (res, req) => {
    console.log('Welcome to success');
    res.send(req.rootUser);
})



module.exports = router; 