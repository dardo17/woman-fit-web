"use client";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";
import AdminStats from "@/components/Admin/AdminStats";
import QuickActions from "@/components/Admin/QuickActions";
import RecentActivity from "@/components/Admin/RecentActivity";
import MembershipList from "@/components/Admin/MembershipList";

import { obtenerPerfilCompleto } from "@/app/services/AuthService";
import { Users, CreditCard, Wallet, UserCog } from "lucide-react";

import { useEffect, useState } from "react";

import {
  obtenerClientes,
  obtenerEntrenadores,
  obtenerMembresias,
} from "@/app/services/AdminService";

export default function AdminDashboard() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    cargarPerfil();
    cargarStats();
  }, []);

  async function cargarPerfil() {
    try {
      const data = await obtenerPerfilCompleto();
      console.log(data);
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function cargarStats() {
    try {
      const clientes = await obtenerClientes();
      const entrenadores = await obtenerEntrenadores();
      const membresias = await obtenerMembresias();
      setStats([
        {
          title: "Clientes",
          value: clientes.length.toString(),
          subtitle: "Registrados",
          icon: <Users size={30} />,
          glow: "from-pink-400 to-pink-300",
        },

        {
          title: "Membresías",
          value: membresias.length.toString(),
          subtitle: "Pendiente",
          icon: <CreditCard size={30} />,
          glow: "from-fuchsia-400 to-pink-300",
        },

        {
          title: "Entrenadores",
          value: entrenadores.length.toString(),
          subtitle: "Registrados",
          icon: <UserCog size={30} />,
          glow: "from-purple-400 to-pink-300",
        },

        {
          title: "Ingresos",
          value: "$0",
          subtitle: "Pendiente",
          icon: <Wallet size={30} />,
          glow: "from-rose-400 to-pink-300",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  const [stats, setStats] = useState([
    {
      title: "Clientes",
      value: "0",
      subtitle: "Cargando...",
      icon: <Users size={30} />,
      glow: "from-pink-400 to-pink-300",
    },

    {
      title: "Membresías",
      value: "0",
      subtitle: "Pendiente",
      icon: <CreditCard size={30} />,
      glow: "from-fuchsia-400 to-pink-300",
    },

    {
      title: "Entrenadores",
      value: "0",
      subtitle: "Cargando...",
      icon: <UserCog size={30} />,
      glow: "from-purple-400 to-pink-300",
    },

    {
      title: "Ingresos",
      value: "$0",
      subtitle: "Pendiente",
      icon: <Wallet size={30} />,
      glow: "from-rose-400 to-pink-300",
    },
  ]);

  const expiringMemberships = [
    {
      name: "Darieni Devora",
      membership: "Premium mensual",
      expires: "Vence en 2 días",
    },

    {
      name: "Jimena Garcia",
      membership: "Básica trimestral",
      expires: "Vence mañana",
    },

    {
      name: "Maria Monserath",
      membership: "Premium anual",
      expires: "Vence en 5 días",
    },
  ];

  const recentActivity = [
    "Nuevo cliente registrado",
    "Pago registrado correctamente",
    "Membresía renovada",
    "Entrenador agregado",
  ];

  const quickActions = [
    "Registrar cliente",
    "Nueva membresía",
    "Registrar pago",
    "Agregar entrenador",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9FC] via-[#FDEEF4] to-[#F8D7E5] flex flex-col lg:flex-row">
      {/* Blob superior */}

      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-pink-200/40 blur-3xl rounded-full"></div>

      {/* Blob inferior */}

      <div className="absolute bottom-[-250px] right-[-120px] w-[520px] h-[520px] bg-pink-300/30 blur-3xl rounded-full"></div>

      {/* Sidebar */}

      <AdminSidebar usuario={usuario} />

      {/* Main */}

      <section className="relative z-10 flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Header */}

        <AdminHeader usuario={usuario} />

        {/* Stats */}

        <AdminStats stats={stats} />

        {/* Segunda fila */}

        <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.7fr] gap-6 mb-10">
          {/* Quick actions */}

          <QuickActions quickActions={quickActions} />

          {/* Actividad reciente */}

          <RecentActivity recentActivity={recentActivity} />
        </div>

        {/* Membresías */}

        <MembershipList expiringMemberships={expiringMemberships} />
      </section>
    </main>
  );
}
