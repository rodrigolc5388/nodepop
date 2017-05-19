"use strict";

var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

router.get('/', (req, res, next) => {
    
    const name = req.query.nombre;
    const sale = req.query.venta;
    const price = parseInt(req.query.precio);
    const tag = req.query.tag;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;

    const filter = {};

    if(tag){
        filter.tags = tag.toLowerCase();
    }

    Anuncio.list(filter, limit, skip, null, sort, (err, anuncios) => {
        if(err){
            next(err);
            return;
        }

        res.json({success: true, result: anuncios});

    });
});

//Función para agregar anuncios - Esto aún hay que tocarlo
/*router.post('/', (req, res, next) => {

    const anuncio = new Anuncio(req.body);
    anuncio.save((err, anuncioGuardado) => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true, result: anuncioGuardado});
    });
});*/

module.exports = router;