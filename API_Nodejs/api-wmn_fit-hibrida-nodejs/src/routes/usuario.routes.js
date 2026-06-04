const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');

const { verificarToken, verificarRol } = require('../middlewares/auth.middleware.js');

router.get('/', verificarToken, verificarRol('ADMIN'), UsuarioController.obtenerUsuarios);
router.get('/:id', verificarToken, UsuarioController.obtenerUsuarioPorId);


router.post('/', verificarToken, verificarRol('ADMIN'), UsuarioController.crearUsuario);


router.put('/:id', verificarToken, verificarRol('ADMIN'), UsuarioController.actualizarUsuario);
router.delete('/:id', verificarToken, verificarRol('ADMIN'), UsuarioController.eliminarUsuario);

module.exports = router;