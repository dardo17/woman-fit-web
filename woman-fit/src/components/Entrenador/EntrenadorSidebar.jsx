import { Home, Users, Clock3, User } from "lucide-react";

export default function EntrenadorSidebar() {
  const menuItems = ["Inicio", "Clientes", "Horarios", "Perfil"];

  return (
    <aside className="relative z-20 w-full lg:w-[260px] lg:min-h-screen bg-white/70 backdrop-blur-xl border-r border-pink-100 shadow-[0_0_35px_rgba(255,77,141,0.08)] flex flex-col justify-between px-6 py-8">
      <div>
        <div className="flex justify-center mb-10">
          <img
            src="/logo_horizontal.png"
            alt="Woman FIT"
            className="w-[220px] drop-shadow-lg"
          />
        </div>

        <nav className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`
                w-full
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                text-left
                font-medium

                ${
                  index === 0
                    ? "bg-gradient-to-r from-pink-400 to-pink-300 text-white shadow-[0_0_25px_rgba(255,77,141,0.25)]"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                }
              `}
            >
              {index === 0 ? (
                <Home size={20} />
              ) : index === 1 ? (
                <Users size={20} />
              ) : index === 2 ? (
                <Clock3 size={20} />
              ) : (
                <User size={20} />
              )}

              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white/80 border border-pink-100 rounded-3xl p-4 shadow-sm flex items-center gap-4 mt-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Andrea Torres</h3>

          <p className="text-sm text-gray-400">Entrenadora</p>
        </div>
      </div>
    </aside>
  );
}
