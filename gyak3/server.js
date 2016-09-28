var express = require('express');
var app = express();

//Middlewares

app.use(function (req, res, next) {
    console.log(req.alma);
    next();
});

app.get('/', function (req, res) {
    res.end('hello');
});

app.get('/alma.html', function (req, res) {
    res.sendFile('/alma.html', {root:'.'})
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server is running');
});