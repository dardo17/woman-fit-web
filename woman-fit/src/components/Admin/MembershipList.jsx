export default function MembershipList({ expiringMemberships }) {
  return (
    <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-8 shadow-[0_0_30px_rgba(255,77,141,0.08)]">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Membresías próximas a vencer
          </h2>

          <p className="text-gray-400">
            Mantente al tanto de las renovaciones importantes
          </p>

        </div>

        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-[0_0_20px_rgba(255,77,141,0.25)] hover:scale-105 transition-all">

          Ver todas

        </button>

      </div>

      <div className="space-y-5">

        {expiringMemberships.map((membership) => (

          <div
            key={membership.name}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-pink-50/50 border border-pink-100 rounded-3xl px-6 py-5"
          >

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">

                {membership.name.charAt(0)}

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-700">
                  {membership.name}
                </h3>

                <p className="text-gray-400">
                  {membership.membership}
                </p>

              </div>

            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

              <span className="text-pink-400 font-semibold text-lg">
                {membership.expires}
              </span>

              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-[0_0_20px_rgba(255,77,141,0.25)] hover:scale-105 transition-all">

                Renovar

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}