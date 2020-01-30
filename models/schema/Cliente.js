const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: Number,
    direccion: String,
    nota: Number
    });

module.exports = Cliente;