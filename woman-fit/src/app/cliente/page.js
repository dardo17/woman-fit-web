import ClienteSidebar from "@/components/Cliente/ClienteSideabar";
import ClienteHeader from "@/components/Cliente/ClienteHeader";
import MembershipCard from "@/components/Cliente/MembershipCard";
import AttendanceHistory from "@/components/Cliente/AttendanceHistory";

export default function ClienteDashboard() {
  const stats = [
    {
      title: "Asistencias",
      value: "8",
      subtitle: "Este mes",
    },

    {
      title: "Próxima renovación",
      value: "15 días",
      subtitle: "Mensual",
    },
  ];

  const historial = [
    "15 Mayo - 7:42 PM",
    "14 Mayo - 6:58 PM",
    "13 Mayo - 8:10 PM",
    "12 Mayo - 7:15 PM",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9FC] via-[#FDEEF4] to-[#F8D7E5] flex flex-col lg:flex-row">
      {/* Blob superior */}

      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-pink-200/40 blur-3xl rounded-full"></div>

      {/* Blob inferior */}

      <div className="absolute bottom-[-250px] right-[-120px] w-[520px] h-[520px] bg-pink-300/30 blur-3xl rounded-full"></div>

      {/* Sidebar */}

      <ClienteSidebar />
      {/* Main */}

      <section className="relative z-10 flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Header */}

        <ClienteHeader />

        {/* Membresía principal */}

        <MembershipCard />

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

        {/* Registrar asistencia */}

        <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)] mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-3">
                Registrar asistencia
              </h2>

              <p className="text-gray-400 text-lg max-w-[600px]">
                Marca tu entrada al gimnasio y mantén un seguimiento de tu
                constancia
              </p>
            </div>

            <button className="px-10 py-5 rounded-3xl bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-bold text-lg shadow-[0_0_30px_rgba(255,77,141,0.25)] hover:scale-105 transition-all">
              Registrar entrada
            </button>
          </div>
        </div>

        {/* Historial */}

        <AttendanceHistory historial={historial} />
      </section>
    </main>
  );
}
