"use client";

import { useEffect, useState } from "react";

import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";

import { obtenerPerfilCompleto } from "@/app/services/AuthService";

import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
} from "@/app/services/AdminService";

export default function UsuariosPage() {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    apellidos: "",
    userName: "",
    correo: "",
    telefono: "",
    contrasenia: "",
    rol: "CLIENTE",
  });

  useEffect(() => {
    cargarPerfil();
    cargarUsuarios();
  }, []);

  async function cargarPerfil() {
    try {
      const data = await obtenerPerfilCompleto();
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function cargarUsuarios() {
    try {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  }

  function editarUsuario(usuario) {
    setModoEdicion(true);

    setIdEditando(usuario.id_usuario);

    setNuevoUsuario({
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      userName: usuario.userName,
      correo: usuario.correo,
      telefono: usuario.telefono,
      contrasenia: "",
      rol: usuario.rol,
    });

    setMostrarFormulario(true);
  }

  async function guardarUsuario() {
    try {
      if (modoEdicion) {
        const datosActualizar = {
          nombre: nuevoUsuario.nombre,
          apellidos: nuevoUsuario.apellidos,
          userName: nuevoUsuario.userName,
          correo: nuevoUsuario.correo,
          telefono: nuevoUsuario.telefono,
          rol: nuevoUsuario.rol,
        };

        await actualizarUsuario(idEditando, datosActualizar);
      } else {
        await crearUsuario(nuevoUsuario);
      }

      setMostrarFormulario(false);

      setModoEdicion(false);
      setIdEditando(null);

      setNuevoUsuario({
        nombre: "",
        apellidos: "",
        userName: "",
        correo: "",
        telefono: "",
        contrasenia: "",
        rol: "CLIENTE",
      });

      cargarUsuarios();
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
                Gestión de Usuarios
              </h2>

              <p className="text-gray-400 mt-2">
                {usuarios.length} usuarios registrados
              </p>

              <p className="text-gray-400 mt-2">
                Administra los usuarios registrados en el sistema
              </p>
            </div>

            <button
              onClick={() => {
                setModoEdicion(false);
                setIdEditando(null);

                setNuevoUsuario({
                  nombre: "",
                  apellidos: "",
                  userName: "",
                  correo: "",
                  telefono: "",
                  contrasenia: "",
                  rol: "CLIENTE",
                });

                setMostrarFormulario(true);
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-[0_0_20px_rgba(255,77,141,0.25)] hover:scale-105 transition-all"
            >
              Nuevo Usuario
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-pink-50 border border-pink-100 rounded-3xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-700 mb-5">
                {modoEdicion ? "Editar Usuario" : "Nuevo Usuario"}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nuevoUsuario.nombre}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      nombre: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                />

                <input
                  type="text"
                  placeholder="Apellidos"
                  value={nuevoUsuario.apellidos}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      apellidos: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                />

                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={nuevoUsuario.userName}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      userName: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                />

                <input
                  type="email"
                  placeholder="Correo"
                  value={nuevoUsuario.correo}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      correo: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                />

                <input
                  type="text"
                  placeholder="Teléfono"
                  value={nuevoUsuario.telefono}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      telefono: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                />

                {!modoEdicion && (
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={nuevoUsuario.contrasenia}
                    onChange={(e) =>
                      setNuevoUsuario({
                        ...nuevoUsuario,
                        contrasenia: e.target.value,
                      })
                    }
                    className="p-3 rounded-xl border border-pink-200"
                  />
                )}

                <select
                  value={nuevoUsuario.rol}
                  onChange={(e) =>
                    setNuevoUsuario({
                      ...nuevoUsuario,
                      rol: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-pink-200"
                >
                  <option value="ADMIN">ADMIN</option>
                  <option value="ENTRENADOR">ENTRENADOR</option>
                  <option value="CLIENTE">CLIENTE</option>
                </select>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={guardarUsuario}
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
                  <th className="text-left py-4 text-gray-500">Nombre</th>
                  <th className="text-left py-4 text-gray-500">Usuario</th>
                  <th className="text-left py-4 text-gray-500">Correo</th>
                  <th className="text-left py-4 text-gray-500">Teléfono</th>
                  <th className="text-left py-4 text-gray-500">Rol</th>
                  <th className="text-left py-4 text-gray-500">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((usuario) => (
                  <tr
                    key={usuario.id_usuario}
                    className="border-b border-pink-50 hover:bg-pink-50/50"
                  >
                    <td className="py-4 text-gray-700 font-medium">
                      {usuario.nombre} {usuario.apellidos}
                    </td>

                    <td className="text-gray-700">
                      {usuario.userName}
                    </td>

                    <td className="text-gray-700">
                      {usuario.correo}
                    </td>

                    <td className="text-gray-700">
                      {usuario.telefono}
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          usuario.rol === "ADMIN"
                            ? "bg-purple-100 text-purple-700"
                            : usuario.rol === "ENTRENADOR"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {usuario.rol}
                      </span>
                    </td>

                    <td>
                      <button
                        onClick={() => editarUsuario(usuario)}
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