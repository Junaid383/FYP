
const dotenv = require('dotenv');
const cors = require("cors");
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

// const DB = 'mongodb+srv://admin:admin@cluster0.sgfz4.mongodb.net/inventroy?retryWrites=true&w=majority'
//This line placed in Config file for security purpose 

//Database code in DB directory 
require('./database/conn');

app.use(express.json());  //this convert json data according to browser format
app.use(cors());
// app.use(require('./img saver/imgSaver'));
//get Routers to make APP.JS Clean
app.use(require('./router/newEmp'));
app.use('/uploads' , express.static('uploads')); 

app.get('/signin', (req, res) => {
    res.send("Hello World From From Signin");
    res.json({ message: req.body });
});

app.get('/login', (req, res) => {
    res.send("Hello World From Login");
    console.log("LOgin")
});






app.listen(5000, () => {
    console.log("Server is running at 5000 port")
})