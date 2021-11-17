const { Router } = require('express');
const { getUserByEmail, revalidarToken, crearUsuario, editarUser } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router();

router.post( '/verifyUser', getUserByEmail );
router.post('/crear',crearUsuario)
router.get( '/renew', validarJWT , revalidarToken );
router.post('/editar', editarUser)

module.exports = router
