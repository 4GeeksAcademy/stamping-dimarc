import { Link } from "react-router-dom";
import heroBg from "../assets/img/hero-call-to-action.png";
import monograma from "../assets/img/monograma-stamping.png";

export default function HeroCTA() {
  return (
    /* Sección con imagen de fondo y CTA */
    <section
      className="d-flex align-items-center py-5 hero-zoom"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        position: "relative",
        color: "white",
      }}
    >
      {/* Capa oscura sobre el fondo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,.35)",
          zIndex: 1,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row g-4 align-items-center">
          {/* Columna izquierda con frase e insignia */}
          <div className="col-lg-6">
            <div className="quote-card text-center">
              <div className="logo-badge">
                <img
                  src={monograma}
                  alt="Monograma Stamping"
                  style={{ width: 64, height: 64, objectFit: "contain" }}
                />
              </div>

              {/* Texto principal */}
              <p
                className="fw-bold"
                style={{ color: "#907ab6", marginTop: "24px", marginBottom: "16px" }}
              >
                Detrás de cada sello hay una historia,
                y detrás de cada historia, un soñador
                que no se rindió.
              </p>

              {/* Texto decorativo */}
              <p className="thanks">Thank You!</p>
            </div>
          </div>

          {/* Columna derecha con botones de acción */}
          <div className="col-lg-6">
            <div className="cta-panel">
              <div className="d-grid gap-3">
                <a
                  href="https://wa.me/50762971297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oval text-center"
                >
                  Haz tu pedido fácil y rápido por WhatsApp
                </a>

                <Link to="/antesdecomprar" className="btn-oval text-center">
                  Guía rápida para saber qué sello necesitas
                </Link>



                <a
                  href="https://instagram.com/stampingdimarc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oval text-center"
                >
                  Explora más en Instagram
                </a>


                <a
                  href="https://tiktok.com/@stampingdimarc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oval text-center"
                >
                  Sígueme en TikTok
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
