const { Router } = require('express');
const { getOfertas, getOfertaById, addOferta, delOferta } = require('../controllers/ofertas')
const router = Router();

router.get( '/get', getOfertas );
router.post('/byid', getOfertaById)
router.post('/agregar', addOferta)
router.delete('/eliminar/:id', delOferta)


module.exports = router
