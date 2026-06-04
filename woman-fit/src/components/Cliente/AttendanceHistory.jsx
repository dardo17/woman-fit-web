import { History, CheckCircle2 } from "lucide-react";

export default function AttendanceHistory({ historial }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Historial de asistencias
          </h2>

          <p className="text-gray-400">
            Tus registros recientes dentro del gimnasio
          </p>

        </div>

        <div className="text-pink-400">

          <History size={34} />

        </div>

      </div>

      <div className="space-y-5">

        {historial.map((item) => (

          <div
            key={item}
            className="flex items-center justify-between bg-pink-50/60 border border-pink-100 rounded-3xl px-6 py-5"
          >

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white shadow-lg">

                <CheckCircle2 size={22} />

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-700">
                  Asistencia registrada
                </h3>

                <p className="text-gray-400">
                  {item}
                </p>

              </div>

            </div>

            <span className="text-pink-400 font-semibold">
              Completado
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}