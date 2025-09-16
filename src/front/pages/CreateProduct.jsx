import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const [slug, setSlug] = useState("");
  const [nombre, setNombre] = useState("");
  const [resumen, setResumen] = useState("");
  const [incluye, setIncluye] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [destacado, setDestacado] = useState(false);
  const API = import.meta.env.VITE_BACKEND_URL;
  const labelStyle = { color: "#756197", fontWeight: 600 };
  const inputStyle = { color: "#756197", borderColor: "#756197" };
  const navigate = useNavigate();

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) navigate("/login");
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      slug,
      nombre,
      resumen,
      incluye,
      precio: parseFloat(precio || 0),
      imagen,
      destacado
    };


    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/productos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },

      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (res.ok) {
      alert("Producto creado");
      setSlug("");
      setNombre("");
      setResumen("");
      setIncluye("");
      setPrecio("");
      setImagen("");
      setDestacado(false);
    } else {
      alert(data.error || "Error al crear producto");
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <h2 className="text-center" style={{ fontFamily: "Pacifico", fontSize: "2rem", color: "#756197" }}>
        Crear Producto
      </h2>
      <form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Slug</label>
          <input type="text" className="form-control" style={inputStyle} required value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Nombre</label>
          <input type="text" className="form-control" style={inputStyle} required value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Resumen</label>
          <textarea className="form-control" style={inputStyle} value={resumen} onChange={(e) => setResumen(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Incluye</label>
          <textarea className="form-control" style={inputStyle} value={incluye} onChange={(e) => setIncluye(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Precio</label>
          <input type="number" step="0.01" min="0" className="form-control" style={inputStyle} required value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={labelStyle}>Imagen (URL)</label>
          <input type="text" className="form-control" style={inputStyle} value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="destacado" checked={destacado} onChange={(e) => setDestacado(e.target.checked)} />
          <label className="form-check-label" htmlFor="destacado" style={labelStyle}>Destacado</label>
        </div>
        <button type="submit" style={{ backgroundColor: "#756197", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}>
          Guardar
        </button>
      </form>
    </div>
  );
};
