"use strict";

var express = require('express');
var router = express.Router();
const Usuario = require('../../models/Usuario');

//POST apiv1/registro
router.post('/', (req, res, next) => {

    //Creo un usuario con la petición
    const nuevoUsuario = new Usuario(req.body);
    nuevoUsuario.email = req.body.email;
    nuevoUsuario.contraseña = req.body.key;

    //Guardo el usuario en la base de datos
    nuevoUsuario.save((err, usuarioCreado) => {
        if (err){
            next(err);
            return;
            }
        console.log('Usuario guardado correctamente', usuarioCreado);
    });
});

module.exports = router;
