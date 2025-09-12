import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import kitsIcon from "../assets/img/kit-icono.png";
import docentesIcon from "../assets/img/docentes-icono.png";
import tintasIcon from "../assets/img/tintas-icono.png";
import asesoriaIcon from "../assets/img/asesorias-icono.png";
import individualesIcon from "../assets/img/individuales-icono.png";
import enviosIcon from "../assets/img/envios-icono.png";

export default function CategoriasSection() {
  const items = [
    { hash: "kits", icon: kitsIcon, label: "Kits" },
    { to: "/docentes", icon: docentesIcon, label: "Sellos docentes" },
    { to: "/tintas", icon: tintasIcon, label: "Tintas" },
    { to: "/antesdecomprar#asesoria", icon: asesoriaIcon, label: "Asesoría" },
    { hash: "individuales", icon: individualesIcon, label: "Individual" },
    { to: "/entregasyenvios", icon: enviosIcon, label: "Entregas y Envíos" }
  ];

  const goHash = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-4">
      <Container>
        <Row className="g-5 justify-content-center text-center">
          {items.map((it) => (
            <Col key={it.label} xs={6} md={4} lg={2}>
              {it.hash ? (
                <button
                  onClick={() => goHash(it.hash)}
                  className="text-decoration-none d-block border-0 bg-transparent w-100"
                >
                  <img
                    src={it.icon}
                    alt={it.label}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 6px 14px rgba(0,0,0,.18)"
                    }}
                  />
                  <div className="mt-3 fw-semibold" style={{ color: "#756197", fontSize: 21.5 }}>
                    {it.label}
                  </div>
                </button>
              ) : (
                <Link to={it.to} className="text-decoration-none d-block">
                  <img
                    src={it.icon}
                    alt={it.label}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 6px 14px rgba(0,0,0,.18)"
                    }}
                  />
                  <div className="mt-3 fw-semibold" style={{ color: "#756197", fontSize: 21.5 }}>
                    {it.label}
                  </div>
                </Link>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
