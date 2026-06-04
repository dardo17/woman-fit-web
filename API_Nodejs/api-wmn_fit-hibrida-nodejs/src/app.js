const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');



const usuarioRoutes = require('./routes/usuario.routes'); 
const clienteRoutes = require('./routes/cliente.routes'); 
const entrenadorRoutes = require('./routes/entrenador.routes'); 
const horarioRoutes = require('./routes/horarioEntrenador.routes'); 
const membresiaRoutes = require('./routes/membresia.routes');
const { verificarToken } = require('./middlewares/auth.middleware');


// Middlewares primero
app.use(cors());
app.use(express.json());




// Rutas

app.use('/membresia', membresiaRoutes);
app.use('/usuario', usuarioRoutes); 
app.use('/cliente', clienteRoutes);
app.use('/entrenador', entrenadorRoutes);
app.use('/horario', horarioRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de GYM híbrido funciona correctamente'
    });
});

module.exports = app;















