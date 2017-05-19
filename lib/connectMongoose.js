"use strict";

//Requires
const mongoose = require('mongoose');
const conn = mongoose.connection;

//Digo a Mongo cuál es la librería de promesas
mongoose.Promise = global.Promise;

//Controlo un posible error en la conexión
conn.on('err', (err) => {
    console.log('Error de conexión', err);
    process.exit(1);
});

//Establezco la conexión con la base de datos
conn.once('open', () => {
console.log('Conectado a la base de datos');
});

mongoose.connect('mongodb://localhost/nodepop');

//No hace falta exportar nada porque Mongoose se guarda
//la conexión internamente.