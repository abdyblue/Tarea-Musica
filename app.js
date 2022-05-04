const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
// var bodyParser = require('body-parser');
const Usuario = require("./database/models/usuario");
const req = require('express/lib/request');
const res = require('express/lib/response');
// configuracion cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
// creacion de un usuario modo test
//const user = new Usuario({ nombre: 'abdy', correo: 'abdy@gmail.com',contrasena:'12331',rol:'admin',imagen:'test.png'});
//user.save();
// rutas
//GET
app.get('/getUsuarios', (req, res) => {
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})
app.post('/postUsuario',(req, res) => {
    Usuario.insertOne(req.body)
    .then(list => {res.send(list);console.log(list)})
    .catch(error => console.error(error))
})
app.put('/')


app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});