export default function AdminStats({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl border border-pink-100 p-7 shadow-[0_0_30px_rgba(255,77,141,0.08)]"
        >

          <div
            className={`
              absolute
              top-[-40px]
              right-[-40px]
              w-32
              h-32
              rounded-full
              opacity-20
              blur-2xl
              bg-gradient-to-br
              ${stat.glow}
            `}
          />

          <div className="relative z-10 flex items-start justify-between">

            <div>

              <p className="text-gray-400 font-medium mb-3">
                {stat.title}
              </p>

              <h2 className="text-5xl font-black text-gray-700 mb-2">
                {stat.value}
              </h2>

              <span className="text-pink-400 text-sm font-semibold">
                {stat.subtitle}
              </span>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center text-pink-500">

              {stat.icon}

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}