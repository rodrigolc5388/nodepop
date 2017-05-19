"use strict";

const mongoose = require('mongoose');
//const ficheroAnuncios = require('../data/anuncios');
//const ficheroUsuarios = require('../data/usuarios');
const leeFichero = require('../data/leeFichero');
const modeloAnuncio = require('../models/Anuncio');
const modeloUsuario = require('../models/Usuario');


//Función para la conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/nodepop', (err, dataBase) => {
    if(err){
        console.log('Error conectando a la base de datos');
        mongoose.connection.close();
        process.exit(1);
    }

    mongoose.connection.dropDatabase('nodepop');
    //mongoose.connection.db.dropCollection();

    obtCargAnuncios();
    obtCargUsuarios();

});


//Función para obtener y cargar los anuncios
function obtCargAnuncios(){
    leeFichero('anuncios.json', (err, data) => {
        if(err) {
            console.log('Error al leer el fichero de anuncios', err);
            //callback(err); 
            return;
        }

        var anunciosJson = JSON.parse(data);
        var arrayAnuncios = [];

        for(var i = 0; i<anunciosJson.anuncios.length; i++){
            const anun = anunciosJson.anuncios[i];
            arrayAnuncios.push(anun);
        }

        modeloAnuncio.insertMany(arrayAnuncios, (err, resultadoAnuncios) => {
            if(err){
                console.log('Error al insertar los anuncios');
                mongoose.connection.close();
                return;
            }
            console.log('Anuncios cargados correctamente');
            console.log('Anuncios', resultadoAnuncios);
        });
    });
}


//Función para obtener y cargar los usuarios
function obtCargUsuarios(){
    leeFichero('usuarios.json', (err, data) => {
        if(err) {
            console.log('Error al leer el fichero de usuarios');
            //callback(err);
            return;
        }

        var usuariosJson = JSON.parse(data);
        var arrayUsuarios = [];

        for(var j = 0; j<usuariosJson.usuarios.length; j++){
            const usua = usuariosJson.usuarios[j];
            arrayUsuarios.push(usua);
        }

        modeloUsuario.insertMany(arrayUsuarios, (err, resultadoUsuarios) => {
            if(err){
                console.log('Error al cargar los usuarios');
                mongoose.connection.close();
                return;
            }
            console.log('Usuariso cargados correctamente');
            console.log('Usuarios', resultadoUsuarios);
        });
    });
}

