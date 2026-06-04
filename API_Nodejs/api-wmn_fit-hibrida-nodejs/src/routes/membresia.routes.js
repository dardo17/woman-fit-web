const express = require('express');
const router = express.Router();
const MembresiaController = require('../controllers/membresia.controller');
const { verificarToken, verificarRol } = require('../middlewares/auth.middleware');


router.post('/', verificarToken, verificarRol('ADMIN'), MembresiaController.registrarMembresia);
router.get('/:idCliente', verificarToken, verificarRol('ADMIN', 'CLIENTE'), MembresiaController.obtenerPorCliente);
router.get(  '/', verificarToken, verificarRol('ADMIN'), MembresiaController. obtenerMembresias);
router.post('/:idMembresia/asistencia', verificarToken, verificarRol('ADMIN', 'ENTRENADOR'), MembresiaController.registrarAsistencia);
router.get('/:idMembresia/asistencia', verificarToken, verificarRol('ADMIN', 'ENTRENADOR', 'CLIENTE'), MembresiaController.obtenerAsistencias);
router.put('/:id', verificarToken, verificarRol('ADMIN'), MembresiaController.actualizarMembresia);
router.put('/:id/pago', verificarToken, verificarRol('ADMIN'), MembresiaController.agregarPago);
router.get('/:idMembresia/pagos', verificarToken, verificarRol('ADMIN', 'CLIENTE'), MembresiaController.obtenerPagos);

module.exports = router;



