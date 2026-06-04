import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  CreditCard,
  Dumbbell,
  Calendar,
  Wallet,
  Settings,
  userCog,
} from "lucide-react";

export default function AdminSidebar({ usuario }) {
  const pathname = usePathname();
  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard size={20} />,
    },
    {
      label: "Clientes",
      href: "/admin/clientes",
      icon: <Users size={20} />,
    },
    {
      label: "Membresías",
      href: "/admin/membresias",
      icon: <CreditCard size={20} />,
    },
    {
      label: "Entrenadores",
      href: "/admin/entrenadores",
      icon: <Dumbbell size={20} />,
    },
    {
      label: "Usuarios",
      href: "/admin/usuarios",
      icon: <UserCog size={20} />,
    },
    {
      label: "Asistencias",
      href: "/admin/asistencias",
      icon: <Calendar size={20} />,
    },
    {
      label: "Pagos",
      href: "/admin/pagos",
      icon: <Wallet size={20} />,
    },
    {
      label: "Configuración",
      href: "/admin/configuracion",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="relative z-20 w-full lg:w-[280px] lg:min-h-screen bg-white/70 backdrop-blur-xl border-r border-pink-100 shadow-[0_0_35px_rgba(255,77,141,0.08)] flex flex-col justify-between px-6 py-8">
      <div>
        <div className="flex justify-center mb-8">
          <img
            src="/logo_horizontal.png"
            alt="Woman FIT"
            className="w-[220px] sm:w-[260px] lg:w-[320px] drop-shadow-lg"
          />
        </div>

        <nav className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
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
                  pathname === item.href
                    ? "bg-gradient-to-r from-pink-400 to-pink-300 text-white shadow-[0_0_25px_rgba(255,77,141,0.25)]"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                }
              `}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-white/80 border border-pink-100 rounded-3xl p-4 shadow-sm flex items-center gap-4 mt-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white font-bold text-lg">
          {usuario?.nombre?.charAt(0) || "?"}
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">
            {usuario ? `${usuario.nombre} ${usuario.apellidos}` : "Cargando..."}
          </h3>

          <p className="text-sm text-gray-400">{usuario?.rol || ""}</p>
        </div>
      </div>
    </aside>
  );
}
