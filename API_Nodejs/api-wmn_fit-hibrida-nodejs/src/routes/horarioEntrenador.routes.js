const express = require('express');
const router = express.Router();
const horarioEntrenadorController = require('../controllers/horarioEntrenador.controller');
const { verificarToken, verificarRol } = require('../middlewares/auth.middleware');


router.get('/', verificarToken, verificarRol('ADMIN', 'ENTRENADOR'), horarioEntrenadorController.obtenerHorarios);
router.get('/:id', verificarToken, verificarRol('ADMIN', 'ENTRENADOR'), horarioEntrenadorController.obtenerHorarioPorEntrenador);
router.post('/', verificarToken, verificarRol('ADMIN'), horarioEntrenadorController.crearHorario);
router.put('/:id', verificarToken, verificarRol('ADMIN'), horarioEntrenadorController.actualizarHorario);
router.delete('/:id', verificarToken, verificarRol('ADMIN'), horarioEntrenadorController.eliminarHorario);

module.exports = router;