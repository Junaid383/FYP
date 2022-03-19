const mongoose = require('mongoose');
const DB = process.env.DATABASE;

// const DB = 'mongodb+srv://admin:admin@cluster0.sgfz4.mongodb.net/inventroy?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Successfull DB Connection");

}).catch((err) =>
    console.log("Failed DB Connection" ));     


