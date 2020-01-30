const cursoRouter = require('express').Router();


const {getCursos, getCurso, postCurso, deleteCurso} = require('./cursoController');
const {postValidators} = require('./cursoValidators')

cursoRouter.get('/', getCurso);
cursoRouter.post('/', postValidators, postCurso);


cursoRouter.delete('/:id', deleteCurso);

module.exports = cursoRouter;