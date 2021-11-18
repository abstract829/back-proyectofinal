const { Router } = require('express');
const { getOfertas, getOfertaById, addOferta, delOferta, agregarFoto } = require('../controllers/ofertas')
const router = Router();

router.get( '/get', getOfertas );
router.post('/byid', getOfertaById)
router.post('/agregar', addOferta)
router.post('/addfoto', agregarFoto)
router.delete('/eliminar/:id', delOferta)


module.exports = router
