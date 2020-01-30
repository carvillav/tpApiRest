const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: Number,
    direccion: String
    });

module.exports = Cliente;