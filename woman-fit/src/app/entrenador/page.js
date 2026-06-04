import EntrenadorSidebar from "@/components/Entrenador/EntrenadorSidebar";
import EntrenadorHeader from "@/components/Entrenador/EntrenadorHeader";
import ScheduleCard from "@/components/Entrenador/ScheduleCard";
import ClientsList from "@/components/Entrenador/ClientsList";
import ScheduleList from "@/components/Entrenador/ScheduleList";

export default function EntrenadorDashboard() {
  const stats = [
    {
      title: "Clientes asignados",
      value: "24",
      subtitle: "Actualmente activos",
    },

    {
      title: "Sesiones de hoy",
      value: "5",
      subtitle: "Programadas",
    },
  ];

  const clientes = [
    {
      nombre: "Jimena Garcia",
      membresia: "Mensual activa",
      visita: "Última visita: ayer",
    },

    {
      nombre: "Maria Monserath",
      membresia: "Mensual activa",
      visita: "Última visita: hoy",
    },

    {
      nombre: "Darieni Devora",
      membresia: "Mensual activa",
      visita: "Última visita: hace 2 días",
    },
  ];

  const horarios = [
    "7:00 AM - Entrenamiento normal",
    "10:00 AM - Sesión grupal",
    "1:00 PM - Seguimiento clientes",
    "5:00 PM - Clase personalizada",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FFF9FC] via-[#FDEEF4] to-[#F8D7E5] flex flex-col lg:flex-row">
      {/* Blob superior */}

      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-pink-200/40 blur-3xl rounded-full"></div>

      {/* Blob inferior */}

      <div className="absolute bottom-[-250px] right-[-120px] w-[520px] h-[520px] bg-pink-300/30 blur-3xl rounded-full"></div>

      {/* Sidebar */}

      <EntrenadorSidebar />

      {/* Main */}

      <section className="relative z-10 flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Header */}

        <EntrenadorHeader />

        {/* Card principal */}

        <ScheduleCard />

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]"
            >
              <p className="text-gray-400 font-medium mb-4">{stat.title}</p>

              <h2 className="text-5xl font-black text-gray-700 mb-3">
                {stat.value}
              </h2>

              <span className="text-pink-400 font-semibold">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Clientes y horarios */}

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Clientes */}

          <ClientsList clientes={clientes} />

          {/* Horarios */}

          <ScheduleList horarios={horarios} />
        </div>
      </section>
    </main>
  );
}
