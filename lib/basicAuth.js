"use strict";

const basicAuth = require('basic-auth');
const leeFichero = require('../data/leeFichero');
const Usuario = require('../models/Usuario');


module.exports = (req, res, next) => {

    leeFichero("usuarios.json", (err, data) => {
            if(err) {
                reject(err);
                return;
            }
    });

    const arrayUsuarios = [];
    for(var i = 0; i<data.usuarios.length; i++){
        arrayUsuarios.push(data.usuarios[i]);
    };

    Usuario.findOne({email: req.email, contraseña: req.key}).exec((err, usuarioEncontrado) => {
        if(err){
            next(err);
            return;
        }
    })


    const user = basicAuth(req);

    

    //Buscar en la base de datos el usuario de user.name
    //y comprobar la password
    if(!user){
        res.set('WWW-Authenticate', 'Basic realm=Authorization Require');
        res.send(401);
        return;
    }
    next();
}
