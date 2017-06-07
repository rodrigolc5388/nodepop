"use strict";

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

    function búsquedaTags(req, res) {
        Anuncio.list({}, null, null, 'tags', null, (err, resultado) => {
        if(err){
            res.json({success: false, message: err});
            return;
        }

        var tagsEnDB = [];
        for(var i = 0; i<resultado.length; i++){
            var anuncio = resultado[i].tags;
            tagsEnDB.push(anuncio);
        }

        res.json({success: true, tags: tagsEnDB});
        });
    }
});

module.exports = router;


