const Membresia = require("../models/membresia.model");
const Cliente = require("../models/cliente.model");
const Usuario = require("../models/usuario.model");
const Entrenador = require("../models/entrenador.model");

class MembresiaController {
  //monse
  static async registrarMembresia(req, res) {
    try {
      const {
        idCliente,
        idEntrenador,
        tipo,
        fechaInicio,
        fechaFin,
        estado,
        pagos,
        asistencias,
      } = req.body;

      const nuevaMembresia = new Membresia({
        idCliente,
        idEntrenador,
        tipo,
        fechaInicio,
        fechaFin,
        estado,
        pagos,
        asistencias,
      });

      const membresiaGuardada = await nuevaMembresia.save();

      res.status(201).json({
        mensaje: "Membresia registrada correctamente",
        data: membresiaGuardada,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al registrar membresia",
        error: error.message,
      });
    }
  }

  static async obtenerMembresias(req, res) {
    try {
      const membresias = await Membresia.find();

      const membresiasConNombre = await Promise.all(
        membresias.map(async (membresia) => {
          const cliente = await Cliente.obtenerPorId(membresia.idCliente);

          let clienteNombre = "Sin nombre";

          if (cliente) {
            const usuario = await Usuario.obtenerPorId(cliente.id_usuarioFK);

            if (usuario) {
              clienteNombre = `${usuario.nombre} ${usuario.apellidos}`;
            }
          }
          const entrenador = await Entrenador.obtenerPorId(
            membresia.idEntrenador,
          );

          let entrenadorNombre = "Sin entrenador";

          if (entrenador) {
            const usuarioEntrenador = await Usuario.obtenerPorId(
              entrenador.id_usuarioFK,
            );

            if (usuarioEntrenador) {
              entrenadorNombre = `${usuarioEntrenador.nombre} ${usuarioEntrenador.apellidos}`;
            }
          }

          return {
            ...membresia.toObject(),
            clienteNombre,
            entrenadorNombre,
          };
        }),
      );

      res.status(200).json(membresiasConNombre);
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al obtener membresías",
        error: error.message,
      });
    }
  }

  static async obtenerPorCliente(req, res) {
    try {
      const { idCliente } = req.params;

      const Membresias = await Membresia.find({ idCliente });

      res.status(200).json({
        data: Membresias,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al obtener membresia",
        error: error.message,
      });
    }
  }

  //ACTUALIZAR MEMBRESIA JIMENO

  static async actualizarMembresia(req, res) {
    try {
      const { id } = req.params;

      const actualizada = await Membresia.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!actualizada) {
        return res.status(404).json({ mensaje: "No encontrada" });
      }

      res.json({
        mensaje: "Actualizada correctamente",
        data: actualizada,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al actualizar",
        error: error.message,
      });
    }
  }

  //AGREGAR PAGO JIMENO
  static async agregarPago(req, res) {
    try {
      const { id } = req.params;

      const nuevoPago = {
        fechaPago: req.body.fechaPago,
        metodoPago: req.body.metodoPago,
        monto: req.body.monto,
      };

      const membresiaActualizada = await Membresia.findByIdAndUpdate(
        id,
        {
          $push: { pagos: nuevoPago },
        },
        { new: true, runValidators: true },
      );

      if (!membresiaActualizada) {
        return res.status(404).json({
          mensaje: "Membresía no encontrada",
        });
      }

      res.status(200).json({
        mensaje: "Pago agregado correctamente",
        data: membresiaActualizada,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Error al agregar pago",
        error: error.message,
      });
    }
  }

  //OBTENER PAGOS POR MEMBRESIAS DARY

  static async obtenerPagos(req, res) {
    try {
      const { idMembresia } = req.params;

      const membresia = await Membresia.findById(idMembresia);

      if (!membresia) {
        return res.status(404).json({
          mensaje: "Membresía no encontrada",
        });
      }

      res.status(200).json({
        pagos: membresia.pagos,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al obtener pagos",
        error: error.message,
      });
    }
  }

  //REGISTRAR ASISTENCIA LALO

  static async registrarAsistencia(req, res) {
    try {
      const { idMembresia } = req.params;
      const { fechaAsistencia, horaEntrada, horaSalida } = req.body;

      const membresia = await Membresia.findById(idMembresia);

      if (!membresia) {
        return res.status(404).json({
          mensaje: "Membresía no encontrada",
        });
      }

      membresia.asistencias.push({
        fechaAsistencia,
        horaEntrada,
        horaSalida,
      });

      await membresia.save();

      res.status(200).json({
        mensaje: "Asistencia registrada correctamente",
        data: membresia.asistencias,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al registrar asistencia",
        error: error.message,
      });
    }
  }

  // OBTENER ASISTENCIA POR MEMBRESIA LALO

  static async obtenerAsistencias(req, res) {
    try {
      const { idMembresia } = req.params;

      const membresia = await Membresia.findById(idMembresia);

      if (!membresia) {
        return res.status(404).json({
          mensaje: "Membresía no encontrada",
        });
      }

      res.status(200).json({
        asistencias: membresia.asistencias,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: "Error al obtener asistencias",
        error: error.message,
      });
    }
  }
}

module.exports = MembresiaController;
