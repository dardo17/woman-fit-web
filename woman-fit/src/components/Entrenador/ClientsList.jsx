import { Users } from "lucide-react";

export default function ClientsList({ clientes }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Clientes recientes
          </h2>

          <p className="text-gray-400">
            Seguimiento general de clientes asignados
          </p>
        </div>

        <div className="text-pink-400">
          <Users size={34} />
        </div>
      </div>

      <div className="space-y-5">
        {clientes.map((cliente) => (
          <div
            key={cliente.nombre}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 bg-pink-50/60 border border-pink-100 rounded-3xl px-6 py-5"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {cliente.nombre.charAt(0)}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700">
                  {cliente.nombre}
                </h3>

                <p className="text-gray-400">{cliente.membresia}</p>
              </div>
            </div>

            <span className="text-pink-400 font-semibold">
              {cliente.visita}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
