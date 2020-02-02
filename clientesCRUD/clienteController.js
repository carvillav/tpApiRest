const Curso = require('../models/Curso');

const getCliente = (req, res, next) => {
    const id = req.params.id;

    Curso.findById(id)
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                })
            } else {
                res.status(200).json({
                    code: 00,
                    message: curso.alumnos
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const getAlumnoDestacadoXCurso = (req, res, next) => {
    const id = req.params.id;

   Curso.findById(id)
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "El recurso no fue encontrado"
                })
            } else {
                res.status(200).json({
                    code: 00,
                    message: curso.alumnos.slice(0).sort((a,b) => b.nota - a.nota )[0]
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};


module.exports = {getCliente, getAlumnoDestacadoXCurso};