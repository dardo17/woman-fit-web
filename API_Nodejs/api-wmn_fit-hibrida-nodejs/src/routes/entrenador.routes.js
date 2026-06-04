const express = require('express');
const router = express.Router();
const entrenadorController = require('../controllers/entrenador.controller');
const { verificarToken, verificarRol } = require('../middlewares/auth.middleware');

router.get('/', verificarToken, verificarRol('ADMIN', 'ENTRENADOR'), entrenadorController.obtenerEntrenadores);
router.get('/:id', verificarToken, verificarRol('ADMIN', 'ENTRENADOR'), entrenadorController.obtenerEntrenadorPorId);
router.post('/', verificarToken, verificarRol('ADMIN'), entrenadorController.crearEntrenador);
router.put('/:id', verificarToken, verificarRol('ADMIN'), entrenadorController.actualizarEntrenador);
router.delete('/:id', verificarToken, verificarRol('ADMIN'), entrenadorController.eliminarEntrenador);


module.exports = router;