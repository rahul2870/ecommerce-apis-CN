const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
// pw : Xm45OCySpY6Qibpm
mongoose.connect('mongodb+srv://2870rahul:Xm45OCySpY6Qibpm@cluster0.jw9glmd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;