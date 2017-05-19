"use strict";

//Require
const mongoose = require('mongoose');

//Creo el esquema
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

//Método estático
anuncioSchema.statics.list = function(filter, limit, skip, fields, sort, callback){
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    query.exec(callback);
};

//Creo el modelo usando el esquema
var Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Exporto el modelo
module.exports = Anuncio;