// require modules
const express = require('express');
const mongoose = require('mongoose');

// create express app
const app = express();

// create connection URI
const dbURI = 'mongodb+srv://oscar:OOgymodZdjwBoAvl@cluster0.kuzcnac.mongodb.net/owenApi?retryWrites=true&w=majority';

// connect app with MongoDB
mongoose.connect(dbURI)
.then(() => {
    // listen for requests
    app.listen(3000, () => {
        console.log("API App running on port 3000");
    });
    console.log("Connection Success!");
})
.catch((err) => {
    console.log(err);
});

// routes
app.get('/', (req, res) => {
    res.send("Hello Simple API");
});

app.get('/blog', (req, res) => {
    res.send("hello i am a test blog");
});
