const cursoRouter = require('express').Router();


const {getListadoCursos, getCurso, postCurso, deleteCurso} = require('./cursoController');
const {postValidators} = require('./cursoValidators')
const {getCliente, getAlumnoDestacadoXCurso} = require('../clientesCRUD/clienteController');

cursoRouter.get('/', getListadoCursos);
cursoRouter.get('/', getCurso);

cursoRouter.post('/', postValidators, postCurso);

cursoRouter.delete('/:id', deleteCurso);

cursoRouter.get('/:id/cliente', getCliente);
cursoRouter.get('/:id/destacado', getAlumnoDestacadoXCurso);

module.exports = cursoRouter;