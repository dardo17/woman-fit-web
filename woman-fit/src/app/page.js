"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        const decoded = jwtDecode(data.token);

        const rol = decoded.rol.toLowerCase();
        console.log(rol);

        setMensaje("Inicio de sesión exitoso");

        if (rol === "admin") {
          router.push("/admin");
        } else if (rol === "cliente") {
          router.push("/cliente");
        } else if (rol === "entrenador") {
          router.push("/entrenador");
        } else {
          setMensaje("Rol no reconocido");
        }
      } else {
        setMensaje(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);

      setMensaje("Error del servidor");
    }
  };

  return (
    <main className="relative isolate min-h-screen flex items-center justify-center lg:justify-start bg-gradient-to-br from-[#FFF9FC] via-[#FDEEF4] to-[#F9D7E5] overflow-hidden px-4">
      {/* Estrellitas */}

      <Sparkles
        className="absolute top-20 left-20 text-pink-300 opacity-50"
        size={24}
      />

      <Sparkles
        className="absolute bottom-24 right-24 text-pink-200 opacity-40"
        size={30}
      />

      <Sparkles
        className="absolute top-40 right-40 text-pink-300 opacity-30"
        size={18}
      />

      <Sparkles
        className="absolute top-[15%] right-[18%] text-pink-200 opacity-40"
        size={16}
      />

      <Sparkles
        className="absolute bottom-[18%] left-[12%] text-pink-300 opacity-30"
        size={20}
      />

      <Sparkles
        className="absolute bottom-[10%] right-[20%] text-pink-300 opacity-40"
        size={24}
      />

      <Sparkles
        className="absolute top-[55%] left-[8%] text-pink-200 opacity-20"
        size={14}
      />
      <div className="absolute top-0 left-0 opacity-30 -z-10">
        <svg
          width="500"
          height="220"
          viewBox="0 0 500 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
        M0 120
        C120 40 220 180 360 110
        C430 80 470 40 500 20
      "
            stroke="#F9A8D4"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="
        M0 150
        C140 70 240 200 390 130
        C450 100 480 70 500 50
      "
            stroke="#FBCFE8"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Blob superior */}

      <div
        className="
          absolute
          -z-10
          top-[-120px]
          left-[-120px]
          w-[450px]
          h-[450px]
          bg-gradient-to-br
          from-pink-200
          to-pink-300
          opacity-40
          blur-3xl
          rounded-[60%_40%_70%_30%/30%_30%_70%_70%]
          animate-pulse
        "
      ></div>

      {/* Blob inferior */}

      <div
        className="
          absolute
          -z-10
          bottom-[-150px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-gradient-to-br
          from-pink-300
          to-purple-200
          opacity-25
          blur-3xl
          rounded-[30%_70%_30%_70%/50%_60%_40%_50%]
          animate-pulse
        "
      ></div>

      {/* Blob central */}

      <div
        className="
          absolute
          -z-10
          top-[40%]
          left-[10%]
          w-[250px]
          h-[250px]
          bg-pink-100
          opacity-20
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
              absolute
              -z-10
              bottom-[-250px]
              right-[-200px]
              w-[700px]
              h-[700px]
              bg-gradient-to-br
              from-pink-200
              to-pink-300
              opacity-30
              blur-3xl
              rounded-[55%_45%_70%_30%/40%_60%_40%_60%]
            "
      ></div>

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          pointer-events-none
          opacity-40
        "
      >
        <svg
          className="absolute top-0 left-0"
          width="400"
          height="250"
          viewBox="0 0 400 250"
          fill="none"
        >
          <path
            d="M0 80 C120 0 220 140 400 40"
            stroke="#F9A8D4"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="500"
          height="300"
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M500 180 C350 80 220 320 0 180"
            stroke="#F9A8D4"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Olas inferiores derechas */}

      <div
        className="
    absolute
    bottom-0
    right-0
    -z-10
    blur-[1px]
    opacity-90
  "
      >
        <svg
          width="1200"
          height="1000"
          viewBox="0 0 1200 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blob exterior suave */}

          <path
            d="
        M280 1000
        C500 900 720 820 930 760
        C1080 720 1160 680 1200 620
        L1200 1000
        Z
      "
            fill="#FBCFE8"
            opacity="0.95"
          />

          {/*  capa 2*/}

          <path
            d="
        M460 1000
        C650 910 820 840 980 790
        C1100 750 1170 710 1200 670
        L1200 1000
        Z
      "
            fill="#F9A8D4"
            opacity="0.95"
          />

          {/* esquina inferior */}

          <path
            d="
        M760 1000
        C900 930 1010 870 1110 820
        C1160 790 1190 760 1200 740
        L1200 1000
        Z
      "
            fill="#F472B6"
            opacity="0.9"
          />

          {/* blanco principal */}

          <path
            d="
        M500 1000
        C700 900 880 830 1050 780
        C1140 750 1180 720 1200 700
      "
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Línea blanca secundaria */}

          <path
            d="
        M430 1000
        C650 900 840 830 1010 780
        C1130 740 1180 710 1200 690
      "
            stroke="#FFF1F7"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </div>

      <div
        className="
    hidden
    lg:block
    absolute
    right-[17%]
    top-[52%]
    -translate-y-1/2
    z-0
    pointer-events-none
  "
      >
        <h1
          className="
      text-[70px]
      leading-[110px]
      font-black
      text-pink-200/80
      tracking-tight
      text-right
      select-none
    "
        >
          Se la mejor version
          <br />
          de ti misma
        </h1>
      </div>

      {/* Card Login */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          isolate
          z-20
          w-full
          max-w-md
          bg-white/90
          backdrop-blur-md
          rounded-[40px]
          shadow-[0_0_80px_rgba(255,77,141,0.35)]
          border
          border-pink-100
          p-10
          lg:ml-[15%]
        "
      >
        {/* Logo */}

        <div className="flex justify-center mb-8">
          <img
            src="/logo_circular_wmn_fit.png"
            alt="Woman FIT"
            className="w-52 drop-shadow-lg"
          />
        </div>

        {/* Texto */}

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#4B5563] mb-3">Bienvenida</h2>

          <p className="text-[#A1A1AA]">Inicia sesión para continuar</p>

          <div className="w-16 h-1 bg-[#FF4D8D] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Formulario */}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Correo */}

          <div>
            <label className="block mb-3 text-[#4B5563] font-medium">
              Correo
            </label>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300"
                size={20}
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="
                  w-full
                  p-4
                  pl-12
                  rounded-2xl
                  border
                  border-pink-200
                  bg-pink-50/40
                  text-[#4B5563]
                  placeholder-[#D8A7BB]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-pink-200
                  focus:border-[#FF4D8D]
                  transition-all
                  duration-300
                "
              />
            </div>
          </div>

          {/* Contraseña */}

          <div>
            <label className="block mb-3 text-[#4B5563] font-medium">
              Contraseña
            </label>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300"
                size={20}
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  p-4
                  pl-12
                  rounded-2xl
                  border
                  border-pink-200
                  bg-pink-50/40
                  text-[#4B5563]
                  placeholder-[#D8A7BB]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-pink-200
                  focus:border-[#FF4D8D]
                  transition-all
                  duration-300
                "
              />
            </div>
          </div>

          {/* Mensaje */}

          {mensaje && (
            <p className="text-center text-sm text-pink-500">{mensaje}</p>
          )}

          {/* Botón */}

          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r
              from-[#FF4D8D]
              to-[#FF70A6]
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(255,77,141,0.5)]
              transition-all
              duration-300
              text-white
              font-semibold
              p-4
              rounded-2xl
              shadow-lg
              
            "
          >
            Iniciar sesión
          </button>
        </form>
      </motion.div>
    </main>
  );
}
