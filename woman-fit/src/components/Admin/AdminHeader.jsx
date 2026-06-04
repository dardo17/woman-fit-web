import { Bell, Settings } from "lucide-react";

export default function AdminHeader({ usuario }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

      <div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-700 tracking-tight">
          Hola {usuario?.nombre || "Usuario"} 👋
        </h1>

        <p className="text-gray-400 mt-2 text-lg">
          Gestiona tu gimnasio, tu espacio seguro para el bienestar femenino
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="w-14 h-14 rounded-2xl bg-white/80 border border-pink-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-pink-500">
          <Bell size={24} />
        </button>

        <button className="w-14 h-14 rounded-2xl bg-white/80 border border-pink-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-pink-500">
          <Settings size={24} />
        </button>

      </div>

    </div>
  );
}