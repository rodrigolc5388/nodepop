"use strict";

const basicAuth = require('basic-auth');
const leeFichero = require('../data/leeFichero');
const Usuario = require('../models/Usuario');


module.exports = (req, res, next) => {

//Obtengo lista de usuarios para comparar
    leeFichero("usuarios.json", (err, data) => {
            if(err) {
                reject(err);
                return;
            }
    });

    var arrayUsuarios = [];
    for(var i = 0; i<data.usuarios.length; i++){
        arrayUsuarios.push(data.usuarios[i]);
    };

    const user = basicAuth(req);


    //Buscar en la base de datos el usuario de user.name
    //y comprobar la password
    if(!user || user.email !== arrayUsuarios.email || user.key !== arrayUsuarios.contraseña){
        res.set('WWW-Authenticate', 'Basic realm=Authorization Require');
        res.send(401);
        return;
    } else {
        Usuario.findOne({email: req.email, contraseña: req.key}).exec((err, usuarioEncontrado) => {
        if(err){
            next(err);
            return;
        }
        res.json({sucess: true, result: usuarioEncontrado});
        next();
        })
    }
}
