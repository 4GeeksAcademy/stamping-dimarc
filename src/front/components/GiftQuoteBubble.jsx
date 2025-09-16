import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FRASES_EMPRENDEDORES = [
  "Crea, sueña y estampa tu esencia",
  "Tu sello es la chispa que enciende tu marca",
  "Haz de cada empaque una experiencia inolvidable",
  "Lo hecho a mano tiene más magia",
  "Impulsa tu negocio con detalles que hablan por ti"
];

const FRASES_DOCENTES = [
  "Motiva a tus estudiantes con cada sello",
  "Cada corrección puede inspirar confianza",
  "Celebra los logros con detalles creativos",
  "Pequeños sellos, grandes sonrisas en clase",
  "Reforzar con alegría hace que el aprendizaje brille"
];

export default function GiftQuoteBubble({ side = "left" }) {
  const { pathname } = useLocation();
  const modo = pathname.startsWith("/docentes") ? "docentes" : "emprendedores";
  const FRASES = modo === "docentes" ? FRASES_DOCENTES : FRASES_EMPRENDEDORES;
  const storageKey = `quoteShown:${modo}`;

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const shown = sessionStorage.getItem(storageKey);
    if (!shown) {
      setOpen(true);
      sessionStorage.setItem(storageKey, "1");
    } else {
      setOpen(false);
    }
    setIdx(0);
  }, [modo]);

  const toggle = () => {
    if (!open) setIdx((i) => (i + 1) % FRASES.length);
    setOpen((v) => !v);
  };

  return (
    <div
      className={`gift-wrap ${side}`}
      style={{ zIndex: 1200 }}
    >
      <button className="gift-btn" onClick={toggle} aria-label="Frase del día">
        <img
          src="https://res.cloudinary.com/dakvux10n/image/upload/v1757866491/Recurso_5ldpi_imootb.png"
          alt=""
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      </button>

      <div className={`gift-bubble ${open ? "show" : ""}`}>
        <div className="gift-title">Frase del día para ti</div>
        <div className="gift-text">{FRASES[idx]}</div>
      </div>
    </div>
  );
}
