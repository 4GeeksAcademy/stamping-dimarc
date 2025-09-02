import React from "react";
import { Button, Badge } from "react-bootstrap";
import imgMain from "../assets/img/kit-inicial.jpg";


export default function FichaKitInicial() {
  const colorTexto = "#756197";
  const colorAccion = "#907ab6";

  const producto = {
    slug: "kit-inicial",
    nombre: "Kit inicial",
    resumen:
      "Ideal para negocios de ropa, calzado o productos con empaque mediano o grande.",
    incluye: [
      "1 sello de 10x10cm con logo principal",
      "1 sello de 2x6cm con Instagram y WhatsApp",
      "(No incluye tinta)"
    ],
    imagen: imgMain,
    destacado: true,
    precio: 45
  };

  return (
    <section className="container my-5">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-6">
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", display: "block" }} />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-2">
            {producto.destacado && (
              <Badge bg="light" text="dark" style={{ border: "1px solid #eaeaea" }}>
                Más vendido
              </Badge>
            )}
            <span style={{ fontSize: "0.95rem", color: "#999" }}>Código: {producto.slug}</span>
          </div>

          <h1 style={{ color: colorTexto, marginBottom: 12 }}>{producto.nombre}</h1>
          <p style={{ color: colorTexto, marginBottom: 18 }}>{producto.resumen}</p>

          <h6 style={{ color: colorTexto, opacity: 0.9 }}>Incluye</h6>
          <ul style={{ color: colorTexto, marginBottom: 18 }}>
            {producto.incluye.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>

          <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: colorTexto, margin: "8px 0 16px" }}>
            ${producto.precio.toFixed(2)}
          </p>

          <div className="d-flex gap-3">
            <Button
              style={{ backgroundColor: colorAccion, borderColor: colorAccion }}
              onClick={() => {
                const msg = `Hola, me interesa el ${producto.nombre} (${producto.slug})`;
                window.open(`https://wa.me/50700000000?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
              }}
            >
              Pídelo aquí
            </Button>

            <Button variant="outline-secondary" onClick={() => history.back()}>Volver</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
