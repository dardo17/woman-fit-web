const Usuario = require('../models/usuario.model');

class UsuarioController{
    static async obtenerUsuarios(req, res){
        try{
            const usuarios = await Usuario.obtenerUsuarios();
            res.json(usuarios);
        }catch(error){
            res.status(500).json({
                mensaje: "Error al obtener usuarios",
                error: error.message
            });
        }
    }

    static async obtenerUsuarioPorId(req, res) {
        try {
            const usuario = await Usuario.obtenerPorId(req.params.id);
            if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener usuario", error: error.message });
        }
    }

    static async crearUsuario(req, res){
        try{
            const nuevoUsuario = await Usuario.crear(req.body);
            res.status(201).json({
                mensaje: "Usuario creado correctamente",
                data: nuevoUsuario
            });
        }catch(error){
            res.status(500).json({
                mensaje: "Error al crear usuario",
                error: error.message
            });
        }
    }

     static async actualizarUsuario(req,res){

        try{
            const {id} = req.params;
            const actualizado = await Usuario.actualizar(id, req.body);

            if(!actualizado){
                return res.status(404).json({
                    mensaje: "Usuario no encontrado"
                });
                
            }
            
            res.json({
                mensaje: "Usuario Actualizado correctamente"
            });
        }

        catch(error){
            res.status(500).json({
                mensaje: "Error al actualizar usuario",
                error: error.message
             });

        }
    }

      
    static async eliminarUsuario(req,res){
        const eliminado = await Usuario.eliminar(req.params.id);
        if(!eliminado) return res.status(404).json({mensaje:"No encontrado"});
        res.json({mensaje:"Usuario Eliminado Correctamente"});
    }


    

    static async logout(req,res){
        res.json({mensaje:"Logout correcto"});
    }







} 

module.exports = UsuarioController;