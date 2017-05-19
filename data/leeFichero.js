"use strict";

const fs = require('fs');
const path = require('path');

//Función para leer un fichero, ya sea el de anuncios o el de usuarios
function leeFichero (fichero, callback) { 

    const rutaFichero = path.join(__dirname, fichero);

    //Leo el fichero obtenido
    fs.readFile(rutaFichero, 'utf-8', (err, data) => {
        if(err){
            callback(err);
            return;
        }

        var ficheroLeido = {};
        try{
            ficheroLeido = JSON.parse(data);
        } catch (err){
            callback(err);
            return;
        }

        callback(null, ficheroLeido);
    });
}

module.exports = leeFichero;