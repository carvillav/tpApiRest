const mongoose = require('mongoose');

const Cliente = require('./schema/Cliente');

var Curso = new mongoose.Schema({
    anioDictado: Number,
    duracion: Number,
    tema: String,
    alumnos: { type: Cliente }
  },{collection:'cursos'});
  
  module.exports = mongoose.model('Curso', Curso);

