const { Router } = require('express');
const { getUserByEmail, revalidarToken, crearUsuario, editarUser, agregarFoto, getUserById} = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router();

router.post( '/verifyUser', getUserByEmail );
router.get('/getbyid/:id', getUserById)
router.post('/crear',crearUsuario)
router.get( '/renew', validarJWT , revalidarToken );
router.post('/editar', editarUser)
router.post('/addfoto', agregarFoto)

module.exports = router
