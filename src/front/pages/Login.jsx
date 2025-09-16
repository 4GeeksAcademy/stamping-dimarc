import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.access_token);

      alert("Sesión iniciada");
      navigate("/crear-producto");

    } else {
      alert(data.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <h2 className="text-center" style={{ fontFamily: 'Pacifico', fontSize: '2rem', color: '#756197' }}>
        Iniciar Sesión
      </h2>
      <form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#756197", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};


