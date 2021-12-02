const { Router } = require('express');
const { getLikesByComentarioId, getForos, getForoById, getComentariosByForoId, addComentario, delComentario, addForo, delForo, addLike} = require('../controllers/foro')
const router = Router();

router.get( '/get', getForos );
router.get( '/get/:id', getForoById );
router.get( '/getcomentarios/:id', getComentariosByForoId );
router.post('/addcomentario', addComentario)
router.delete('/delcomentario/:id', delComentario)
router.post('/addforo', addForo)
router.delete('/delforo/:id', delForo)
router.post('/addlike', addLike)
router.get('/likes/:id', getLikesByComentarioId)

module.exports = router