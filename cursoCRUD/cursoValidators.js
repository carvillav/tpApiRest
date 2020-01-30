const { check } = require('express-validator');
const Curso = require('../models/Curso');

const postValidators = [
    /*check('anioDictado').isNumeric().withMessage("El campo anioDictado debe ser numérico")
        .custom(value => {
            return Curso.findOne({anioDictado: value})
                .then(curso => {
                    return curso ? Promise.reject("El anioDictado indicado ya existe") : Promise.resolve()
                })
        }),*/
    check('duracion').exists().withMessage("El campo duracion debe ser ingresada"),
    check('tema').exists().withMessage("El campo tema debe ser ingresada")
];

module.exports = { postValidators };
