const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*',cors());

const port = 8085;

app.get('/',(req,res,next) => {
    res.send('API de operaciones de calculadora');
});

app.get('/suma',(req,res,next) => {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    var result = {
        resultado: x+y
    }

    res.send(result);
});

app.get('/resta',(req,res,next) => {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    var result = {
        resultado: x-y
    }

    res.send(result);
});

app.get('/multiplicacion',(req,res,next) => {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    var result = {
        resultado: x*y
    }

    res.send(result);
});

app.get('/division',(req,res,next) => {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    var result = {
        resultado: x/y
    }

    res.send(result);
});

app.get('/raiz',(req,res,next) => {
    var x = parseInt(req.query.x);

    var result = {
        resultado: Math.sqrt(x)
    }

    res.send(result);
});

app.get('/cuadrado',(req,res,next) => {
    var x = parseInt(req.query.x);

    var result = {
        resultado: Math.pow(x,2)
    }

    res.send(result);
});

app.listen(port, ()=> console.log('listening on port '+port))