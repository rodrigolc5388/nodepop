"use strict";

//Require
const mongoose = require('mongoose');

//Creo el esquema
const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

//Creo el modelo usando el esquema
var Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;