"use strict";

var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

//Ruta que devuelve todos los anuncios
router.get('/', (req, res, next) => {
    
    const name = req.query.nombre;
    const sale = req.query.venta;
    const price = parseInt(req.query.precio);
    const tag = req.query.tag;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if(name){
        filter.name = name.toLowerCase();
    }
    if(sale){
        filter.sale = sale.toLowerCase();
    }
    if(tag){
        filter.tags = tag.toLowerCase();
    }
    

    Anuncio.list(filter, limit, skip, fields, sort, (err, anuncios) => {
        if(err){
            next(err);
            return;
        }

        res.json({success: true, result: anuncios});

    });
});

//Ruta que devuelve los tags existentes
router.get('/tags',(req,res,next)=>{
     Anuncio.listaTags((err,tagsListados)=>{
            if (err){
                next(err);
                return;
            }
            res.json({success: true, result: tagsListados});
     });  

});

module.exports = router;