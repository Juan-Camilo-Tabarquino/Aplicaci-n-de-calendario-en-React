const express = require('express');
const router = express.Router()
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const { isDate } = require('../helpers/isDate')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

router.use( validarJWT );

router.get('/', getEventos);

router.post('/',[

    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','La fecha de inicio es obligatorio').custom( isDate ),
    check('end','La fecha de fin es obligatorio').custom( isDate ),
    
    validarCampos

],crearEvento);

router.put('/:id',[

    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','La fecha de inicio es obligatorio').custom( isDate ),
    check('end','La fecha de fin es obligatorio').custom( isDate ),
    
    validarCampos

], actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;



