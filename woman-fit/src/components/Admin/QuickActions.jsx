import { Sparkles } from "lucide-react";

export default function QuickActions({ quickActions }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Acciones rápidas
          </h2>

          <p className="text-gray-400">
            Gestiona rápidamente las tareas más importantes
          </p>

        </div>

        <div className="text-pink-400">
          <Sparkles size={34} />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {quickActions.map((action) => (

          <button
            key={action}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 to-fuchsia-400 p-[1px]"
          >

            <div className="bg-white rounded-3xl px-6 py-8 group-hover:bg-pink-50 transition-all text-left">

              <div className="text-pink-400 mb-4">
                <Sparkles size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-700">
                {action}
              </h3>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}