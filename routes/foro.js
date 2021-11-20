const { Router } = require('express');
const { getForos, getForoById, getComentariosByForoId, addComentario, delComentario, addForo, delForo } = require('../controllers/foro')
const router = Router();

router.get( '/get', getForos );
router.get( '/get/:id', getForoById );
router.get( '/getcomentarios/:id', getComentariosByForoId );
router.post('/addcomentario', addComentario)
router.post('/delcomentario', delComentario)
router.post('/addforo', addForo)
router.delete('/delforo/:id', delForo)

module.exports = router