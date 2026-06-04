const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const { verificarToken, verificarRol } = require('../middlewares/auth.middleware');

router.get('/', verificarToken, verificarRol('ADMIN'), clienteController.obtenerClientes);
router.get('/:id', verificarToken, clienteController.obtenerClientePorId);
router.post('/', verificarToken, verificarRol('ADMIN'), clienteController.crearCliente);
router.put('/:id', verificarToken, verificarRol('ADMIN'), clienteController.actualizarCliente);
router.delete('/:id', verificarToken, verificarRol('ADMIN'), clienteController.eliminarCliente);



module.exports = router;