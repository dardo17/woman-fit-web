"use client";

import {
  obtenerMembresias,
  crearMembresia,
  actualizarMembresia,
} from "@/app/services/AdminService";

import { useEffect, useState } from "react";

import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";

import { obtenerPerfilCompleto } from "@/app/services/AuthService";

export default function MembresiasPage() {
  const [usuario, setUsuario] = useState(null);
  const [membresias, setMembresias] = useState([]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const [nuevaMembresia, setNuevaMembresia] = useState({
    idCliente: "",
    idEntrenador: "",
    tipo: "Mensual",
    fechaInicio: "",
    fechaFin: "",
    estado: "Activa",
  });

  useEffect(() => {
    cargarPerfil();
    cargarMembresias();
  }, []);

  async function cargarPerfil() {
    try {
      const data = await obtenerPerfilCompleto();
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function cargarMembresias() {
    try {
      const data = await obtenerMembresias();

      console.log(data);

      setMembresias(data);
    } catch (error) {
      console.error(error);
    }
  }

  function editarMembresia(membresia) {
    setModoEdicion(true);

    setIdEditando(membresia._id);

    setNuevaMembresia({
      idCliente: membresia.idCliente,
      idEntrenador: membresia.idEntrenador,
      tipo: membresia.tipo,
      fechaInicio: membresia.fechaInicio.split("T")[0],
      fechaFin: membresia.fechaFin.split("T")[0],
      estado: membresia.estado,
    });

    setMostrarFormulario(true);
  }

  async function guardarMembresia() {
    try {
      if (modoEdicion) {
        await actualizarMembresia(idEditando, nuevaMembresia);
      } else {
        await crearMembresia({
          ...nuevaMembresia,
          pagos: [],
          asistencias: [],
        });
      }

      setMostrarFormulario(false);
      setModoEdicion(false);
      setIdEditando(null);

      cargarMembresias();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9FC] via-[#FDEEF4] to-[#F8D7E5] flex flex-col lg:flex-row">
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-pink-200/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-120px] w-[520px] h-[520px] bg-pink-300/30 blur-3xl rounded-full"></div>

      <AdminSidebar usuario={usuario} />

      <section className="relative z-10 flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <AdminHeader usuario={usuario} />

        <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-700">
                Gestión de Membresías
              </h2>
              <p className="text-gray-400 mt-2">
                {membresias.length} membresías registradas
              </p>
              <p className="text-gray-400 mt-2">
                Administra las membresías registradas en el sistema
              </p>
            </div>

            <button
              onClick={() => {
                setModoEdicion(false);
                setIdEditando(null);

                setNuevaMembresia({
                  idCliente: "",
                  idEntrenador: "",
                  tipo: "Mensual",
                  fechaInicio: "",
                  fechaFin: "",
                  estado: "Activa",
                });

                setMostrarFormulario(true);
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-[0_0_20px_rgba(255,77,141,0.25)] hover:scale-105 transition-all"
            >
              Nueva Membresía
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-pink-50 border border-pink-100 rounded-3xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-700 mb-5">
                {modoEdicion ? "Editar Membresía" : "Nueva Membresía"}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="ID Cliente"
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.idCliente}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      idCliente: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="ID Entrenador"
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.idEntrenador}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      idEntrenador: e.target.value,
                    })
                  }
                />

                <select
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.tipo}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      tipo: e.target.value,
                    })
                  }
                >
                  <option>Mensual</option>
                  <option>Anual</option>
                </select>

                <select
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.estado}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      estado: e.target.value,
                    })
                  }
                >
                  <option>Activa</option>
                  <option>Vencida</option>
                </select>

                <input
                  type="date"
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.fechaInicio}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      fechaInicio: e.target.value,
                    })
                  }
                />

                <input
                  type="date"
                  className="p-3 rounded-xl border border-pink-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={nuevaMembresia.fechaFin}
                  onChange={(e) =>
                    setNuevaMembresia({
                      ...nuevaMembresia,
                      fechaFin: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={guardarMembresia}
                  className="px-5 py-3 rounded-xl bg-pink-500 text-white"
                >
                  Guardar
                </button>

                <button
                  onClick={() => setMostrarFormulario(false)}
                  className="px-5 py-3 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-pink-100">
                  <th className="text-left py-4 text-gray-500">Cliente</th>

                  <th className="text-left py-4 text-gray-500">Entrenador</th>

                  <th className="text-left py-4 text-gray-500">Tipo</th>

                  <th className="text-left py-4 text-gray-500">Estado</th>

                  <th className="text-left py-4 text-gray-500">Fecha Inicio</th>

                  <th className="text-left py-4 text-gray-500">Fecha Fin</th>

                  <th className="text-left py-4 text-gray-500">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {membresias.map((membresia) => (
                  <tr
                    key={membresia._id}
                    className="border-b border-pink-50 hover:bg-pink-50/50 transition-all"
                  >
                    <td className="py-4 text-gray-700 font-medium">
                      {membresia.clienteNombre}
                    </td>

                    <td className="text-gray-700">
                      {membresia.entrenadorNombre}
                    </td>
                    <td className="text-gray-700">{membresia.tipo}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          membresia.estado === "Activa"
                            ? "bg-green-100 text-green-700"
                            : membresia.estado === "Vencida"
                              ? "bg-red-100 text-red-700"
                              : membresia.estado === "Suspendida"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {membresia.estado}
                      </span>
                    </td>

                    <td className="text-gray-700">
                      {new Date(membresia.fechaInicio).toLocaleDateString()}
                    </td>

                    <td className="text-gray-700">
                      {new Date(membresia.fechaFin).toLocaleDateString()}
                    </td>

                    <td>
                      <button
                        onClick={() => editarMembresia(membresia)}
                        className="px-4 py-2 rounded-xl bg-pink-100 text-pink-500 hover:bg-pink-200 transition-all"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
