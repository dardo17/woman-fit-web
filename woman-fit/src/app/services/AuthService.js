const API_URL = "https://node-js-production-08e1.up.railway.app";

export async function obtenerPerfilCompleto() {
  const token = localStorage.getItem("token");

  const perfilResponse = await fetch(`${API_URL}/api/auth/perfil`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!perfilResponse.ok) {
    throw new Error("Error obteniendo perfil");
  }

  const perfil = await perfilResponse.json();

  const usuarioResponse = await fetch(
    `${API_URL}/usuario/${perfil.usuario.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!usuarioResponse.ok) {
    throw new Error("Error obteniendo usuario");
  }

  return await usuarioResponse.json();
}

export async function obtenerMembresias() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/membresia`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}
