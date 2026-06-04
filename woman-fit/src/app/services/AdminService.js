const API_URL = "https://node-js-production-08e1.up.railway.app";

export async function obtenerClientes() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/cliente`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export async function obtenerEntrenadores() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/entrenador`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export async function obtenerMembresias() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/membresia`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await response.json();
}

export async function crearMembresia(membresia) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/membresia`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(membresia),
    }
  );

  return await response.json();
}

export async function actualizarMembresia(id, membresia) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/membresia/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(membresia),
    }
  );

  return await response.json();
}