const { Router } = require('express');
const { getForos, getForoById, getComentariosByForoId } = require('../controllers/foro')
const router = Router();

router.get( '/get', getForos );
router.get( '/get/:id', getForoById );
router.get( '/getcomentarios/:id', getComentariosByForoId );


module.exports = router