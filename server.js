const express = require("express");

const app = express();
const jsonParser = express.json();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.get("/", function(request, response){

    response.sendFile(__dirname + "/public/products.json");
});

app.listen(3000);
