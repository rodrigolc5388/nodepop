"use strict";

const mongoose = require('mongoose');
const leeFichero = require('../data/leeFichero');
const modeloAnuncio = require('../models/Anuncio');
const modeloUsuario = require('../models/Usuario');

// conectar a la base de datos
require('./connectMongoose');

limpiaColeccion(modeloAnuncio)
    .then(obtCargAnuncios)
    .then( () => limpiaColeccion(modeloUsuario) )
    .then(obtCargUsuarios)
    .then( () => {
        mongoose.connection.close();
    });

function limpiaColeccion(modelo) {
    return new Promise((resolve, reject) => {
        modelo.remove({}, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
} 

//Función para obtener y cargar los anuncios
function obtCargAnuncios(){
    return new Promise((resolve, reject) => {
        leeFichero("anuncios.json", (err, data) => {
            if(err) {
                reject(err);
                return;
            }

            //var anunciosJson = JSON.parse(data); // <-- En leeFichero ya estás haciendo JSON.parse!

            // No necesitas recorrer un array para crear otro igual
            // var arrayAnuncios = [];

            // for(var i = 0; i<anunciosJson.anuncios.length; i++){
            //     const anun = anunciosJson.anuncios[i];
            //     arrayAnuncios.push(anun);
            // }

            modeloAnuncio.insertMany(data.anuncios, (err, resultadoAnuncios) => {
                if(err){
                    reject(err);
                    return;
                }
                console.log(resultadoAnuncios.length + ' anuncios cargados correctamente');
                resolve();
            });
        });

    });
}


//Función para obtener y cargar los usuarios
function obtCargUsuarios(){
    return new Promise((resolve, reject) => {
        leeFichero("usuarios.json", (err, data) => {
            if(err) {
                reject(err);
                return;
            }

            //var usuariosJson = JSON.parse(data); // <-- En leeFichero ya estás haciendo JSON.parse!

            // No necesitas recorrer un array para crear otro igual
            // var arrayUsuarios = [];

            // for(var j = 0; j<usuariosJson.usuarios.length; j++){
            //     const usua = usuariosJson.usuarios[j];
            //     arrayUsuarios.push(usua);
            // }

            modeloUsuario.insertMany(data.usuarios, (err, resultadoUsuarios) => {
                if(err){
                    reject(err);
                    return;
                }
                console.log(resultadoUsuarios.length + ' usuarios cargados correctamente');
                resolve();
            });
        });
    });
}

