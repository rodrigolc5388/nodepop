"use strict";

const mongoose = require('mongoose');
const ficheroAnuncios = require('../data/anuncios');
const Anuncio = require('../models/Anuncio');
const leeFichero = require('../data/leeFichero');

//Promesa lecutra JSON Anuncios
function obtenerAnuncios() {
    return new Promise((resolve, reject) => {
        leeFichero(ficheroAnuncios, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

//Promesa carga anuncios leidos
function cargarAnuncios(nuevosAnuncios) {
    return new Promise((resolve, reject) => {
        const anuncios = new Anuncio(nuevosAnuncios);

        anuncios.save(nuevosAnuncios, (err, cargado) => {
            if(err){
                rejct(err);
            }
            resolve(cargado);
        });
    });
}

//Función principal
async function initAnuncios(){
    await Anuncio.remove({}, (err) => {
        if(err){
            reject(err);
        }
        
        const listaAnuncios = await obtenerAnuncios();
        
        const arrayAnuncios = [];
        
        for(var i = 0; i<listaAnuncios.anuncios.length; i++) {
            anuncioExtraido = listaAnuncios.anuncios[i];
            arrayAnuncios.push(anuncioExtraido);
        }

        Anuncio.insertMany(arrayAnuncios, (err, resultado) => {
            if(err){
                console.log('Error cargando los anuncios');
                closeConn(1);
            } else {
                console.log('Anuncios cargados correctamente', resultado);
            }
        })


    })














}






