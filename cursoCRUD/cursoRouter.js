const cursoRouter = require('express').Router();


const {getCursos, getCurso, postCurso, deleteCurso} = require('./cursoController');
const {postValidators} = require('./cursoValidators')

cursoRouter.get('/', getCursos);
cursoRouter.post('/', postValidators, postCurso);

cursoRouter.get('/:id', getCurso);
cursoRouter.delete('/:id', deleteCurso);

module.exports = cursoRouter;