const cursoRouter = require('express').Router();


const {getListadoCursos, getCurso, getListadoAlumnoXCurso, postCurso, deleteCurso} = require('./cursoController');
const {postValidators} = require('./cursoValidators')

cursoRouter.get('/', getListadoCursos);
cursoRouter.get('/', getCurso);
cursoRouter.get('/:id', getListadoAlumnoXCurso);

cursoRouter.post('/', postValidators, postCurso);


cursoRouter.delete('/:id', deleteCurso);

module.exports = cursoRouter;