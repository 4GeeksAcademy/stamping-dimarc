import React from "react";
import { Button, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

// imágenes
import imgLogoGrande from "../assets/img/logo-grande.jpg";
import imgLogoMediano from "../assets/img/logo-mediano.jpg";
import imgLogoMiniSello from "../assets/img/logo-minisello.jpg";
import imgMiniDoblesIconos from "../assets/img/minidobles-iconos.jpg";

// catálogo de KITS
const productos = {
  "logo-grande": {
    slug: "logo-grande",
    nombre: "logo grande",
    resumen: "Ideal para negocios de ropa, calzado o productos con empaque mediano o grande.",
    incluye: [
      "1 sello de 10x10cm con logo principal",
      "1 sello de 2x6cm con Instagram y WhatsApp",
      "(No incluye tinta)"
    ],
    imagen: imgLogoGrande,
    destacado: true,
    precio: 45
  },
  "logo-mediano": {
    slug: "logo-mediano",
    nombre: "logo mediano",
    resumen: "Ideal para marcas de velas artesanales o jabones, joyería y bisutería, reposterías.",
    incluye: [
      "1 sello de 6x5cm con logo principal",
      "1 sello de 2x6cm con Instagram y WhatsApp",
      "(No incluye tinta)"
    ],
    imagen: imgLogoMediano,
    destacado: false,
    precio: 30
  },
  "logo-minisello": {
    slug: "logo-minisello",
    nombre: "logo mini sello",
    resumen: "Ideal para marcas de velas artesanales o jabones, joyería y bisutería, reposterías.",
    incluye: [
      "4 mini sellos (3x4cm o 2x6cm, según diseño)",
      "Logo/hecho a mano/agradecimiento/icono",
      "Datos de Instagram y WhatsApp (1x4cm)",
      "(No incluye tinta)"
    ],
    imagen: imgLogoMiniSello,
    destacado: false,
    precio: 32
  },
  "minidobles-iconos": {
    slug: "minidobles-iconos",
    nombre: "mini dobles iconos",
    resumen: "Ideal para decorar bolsas, cajas y etiquetas. Tamaño especial para iconos sencillos.",
    incluye: [
      "8 diseños medida 2.5cm x 2.5cm solo para iconos sencillos",
      "(No incluye tinta)"
    ],
    imagen: imgMiniDoblesIconos,
    destacado: false,
    precio: 22
  }
};

export default function FichaKitCard() {
  const { id } = useParams();
  const p = productos[id];

  if (!p) {
    return (
      <section className="container my-5">
        <h2>Producto no encontrado</h2>
        <Button variant="outline-secondary" onClick={() => window.history.back()}>
          Volver
        </Button>
      </section>
    );
  }

  const colorTexto = "#756197";
  const colorAccion = "#907ab6";

  return (
    <section className="container my-5">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-6">
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
            <img
              src={p.imagen}
              alt={p.nombre}
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block"
              }}
            />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-2">
            {p.destacado && (
              <Badge bg="light" text="dark" style={{ border: "1px solid #eaeaea" }}>
                Más vendido
              </Badge>
            )}
            <span style={{ fontSize: "0.95rem", color: "#999" }}>Código: {p.slug}</span>
          </div>

          <h1 style={{ color: colorTexto, marginBottom: 12 }}>{p.nombre}</h1>
          <p style={{ color: colorTexto, marginBottom: 18 }}>{p.resumen}</p>

          {p.incluye?.length > 0 && (
            <>
              <h6 style={{ color: colorTexto, opacity: 0.9 }}>Incluye</h6>
              <ul style={{ color: colorTexto, marginBottom: 18 }}>
                {p.incluye.map((i, idx) => <li key={idx}>{i}</li>)}
              </ul>
            </>
          )}

          <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: colorTexto, margin: "8px 0 16px" }}>
            ${p.precio.toFixed(2)}
          </p>

          <div className="d-flex gap-3">
            <Button
              style={{ backgroundColor: colorAccion, borderColor: colorAccion }}
              onClick={() => {
                const msg = `Hola, me interesa el ${p.nombre} (${p.slug})`;
                window.open(`https://wa.me/50762971297?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
              }}
            >
              Pídelo aquí
            </Button>

            <Button variant="outline-secondary" onClick={() => window.history.back()}>
              Volver
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
