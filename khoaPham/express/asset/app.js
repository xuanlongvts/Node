var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(8080);

// app.get('/', (req, res) => {
//     res.send('<p style="color: red">Nong no</p>');
// });

// app.get('/about', (req, res) => {
//     res.send('<p style="color: red">about</p>');
// });


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/total/:num1/:num2', (req, res) => {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var total = parseInt(num1) + parseInt(num2);
    res.send('<h3>Total: ' + total + '</h3>');
});