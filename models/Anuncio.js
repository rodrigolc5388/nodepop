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

//Método estático para listar
anuncioSchema.statics.list = function(filter, limit, skip, fields, sort, callback){
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    query.exec(callback);
};

//Método estático para buscar tags
anuncioSchema.statics.listaTags = function(callback){
    Anuncio.distinct('tags',callback);
};

//Creo el modelo usando el esquema
var Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Exporto el modelo
module.exports = Anuncio;