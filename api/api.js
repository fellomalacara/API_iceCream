require('./config/config');

const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const app = express();

app.use(fileUpload());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());
//recibe las peticiones de cualquier cliente

app.use(require("./routes/indexRoutes"));
app.get('/', function(req, res) {
    res.send('Bienvenido a la ApiRest de Ice Cream');
});

/// CONEXION A LA BASE DE DATOS DE MONGOOSE ////
mongoose.connect('mongodb://localhost:27017/API-ICE', () => {
        console.log("Base de datos En linea");
    })
    //configuracion del motor de la API
app.listen(process.env.PORT, function() {
    console.log('API EN LINEA');
})