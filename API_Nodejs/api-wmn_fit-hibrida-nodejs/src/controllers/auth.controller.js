const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');

class AuthController {

    static async login(req, res) {
    try {
        const { correo, password } = req.body;

        const usuario = await Usuario.obtenerPorCorreo(correo);

        if (!usuario) {
            return res.status(401).json({ mensaje: 'Credenciales invalidas' });
        }

        const esValido = await bcrypt.compare(password, usuario.contrasenia);

        if (!esValido) {
            return res.status(401).json({ mensaje: 'Credenciales invalidas' });
        }

        const token = jwt.sign(
            {
                id: usuario.id_usuario,
                rol: usuario.rol
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            mensaje: 'Login correcto',
            token
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en autenticacion',
            error: error.message
        });
    }
}

    static async perfil (req, res) {
        res.json({
            mensaje: 'Acceso autorizado',
            usuario: req.usuario
        });
    }
}

module.exports = AuthController;