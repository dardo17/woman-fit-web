export default function MembershipCard() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-pink-400 via-pink-300 to-fuchsia-400 p-10 mb-10 shadow-[0_0_40px_rgba(255,77,141,0.25)]">

      <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full bg-white/10 blur-2xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        <div>

          <p className="text-pink-100 text-lg mb-3">
            Membresía activa
          </p>

          <h2 className="text-5xl font-black text-white mb-4">
            Mensual
          </h2>

          <p className="text-pink-100 text-lg">
            Activa hasta el 30 de Mayo, 2026
          </p>

        </div>

        <button className="px-8 py-4 rounded-3xl bg-white text-pink-500 font-bold text-lg shadow-lg hover:scale-105 transition-all">

          Renovar membresía

        </button>

      </div>

    </div>
  );
}