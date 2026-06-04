import { Clock3, CheckCircle2 } from "lucide-react";

export default function ScheduleList({ horarios }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Próximos horarios
          </h2>

          <p className="text-gray-400">Actividades programadas para el día</p>
        </div>

        <div className="text-pink-400">
          <Clock3 size={34} />
        </div>
      </div>

      <div className="space-y-5">
        {horarios.map((horario) => (
          <div
            key={horario}
            className="flex items-center gap-4 bg-pink-50/60 border border-pink-100 rounded-3xl px-5 py-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white shadow-lg">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h3 className="font-bold text-gray-700 text-lg">{horario}</h3>

              <p className="text-gray-400">Programado</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
