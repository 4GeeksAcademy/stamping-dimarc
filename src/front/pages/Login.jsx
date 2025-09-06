import React from "react";

export const Login = () => {
  return (
    <div className="container mt-5 mb-3">
      <h2 className="text-center" style={{ fontFamily: 'Pacifico', fontSize: '2rem', color: '#756197' }}>
        Iniciar Sesión
      </h2>
      <form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#756197", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}
        >Entrar</button>
      </form>
    </div >
  );
};

