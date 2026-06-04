import { CheckCircle2 } from "lucide-react";

export default function RecentActivity({ recentActivity }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">

      <h2 className="text-3xl font-bold text-gray-700 mb-8">
        Actividad reciente
      </h2>

      <div className="space-y-5">

        {recentActivity.map((activity) => (

          <div
            key={activity}
            className="flex items-center gap-4 bg-pink-50/60 rounded-2xl px-5 py-4"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white shadow-lg">

              <CheckCircle2 size={20} />

            </div>

            <div>

              <h3 className="font-semibold text-gray-700">
                {activity}
              </h3>

              <p className="text-sm text-gray-400">
                Hace unos minutos
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}