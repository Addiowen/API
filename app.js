// require modules
const express = require('express');

// create express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.send("Hello Simple API");
});

// listen for requests
app.listen(3000, () => {
    console.log("API App running on port 3000");
});