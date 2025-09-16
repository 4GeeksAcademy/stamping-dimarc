import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Docentes() {
  return (
    <>
      <header className="container my-4">
        <h1 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Sellos docentes
        </h1>
        <p style={{ color: "#756197", fontSize: "1.7rem" }}>
          Diseños pensados para motivar, reforzar y dar seguimiento a las tareas escolares.
        </p>
        <p style={{ color: "#756197" }}>
          Catálogo disponible por WhatsApp y opción de diseños personalizados
        </p>
      </header>

      <section className="container mb-5" id="asesoria">
        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Asesoría de tamaños</h2>
        <p style={{ color: "#756197" }}>Elige la medida que mejor se adapte a tu dinámica de clases:</p>
        <ul style={{ color: "#756197", fontSize: "1.7rem" }}>
          <li><strong>2.5 × 2.5 cm</strong> Diseños sencillos, íconos y frases cortas.</li>
          <li><strong>3 × 4 o 2 × 6cm</strong> Espacio ideal para frases más detalladas, mensajes motivadores o control de tareas.</li>
          <li><strong>6 × 5 cm cm</strong> Cuadro amplio para evaluaciones completas: nombre, fecha y casillas de desempeño.</li>
          <li><strong>2 ×14 cm</strong> Guías de trazos y patrones para actividades de escritura y motricidad fina.</li>
        </ul>
      </section>


      {/* <section className="container mb-5"><KitCard /></section> */}


      <section className="container mb-5" id="docentes-bloque-1">
        <h2 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Recomendados para el aula
        </h2>
        <h6 className="text-start mb-4" style={{ color: "#907ab6" }}>
          Refuerzos positivos y control de tareas
        </h6>

        <div className="row g-4">
          {/* 1 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/refuerzo-25" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757711715/20240222_124906_wuhpzf.jpg" alt="Pack refuerzo 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Kit Docente Básico</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                  Tres sellos de 3×4 cm o 2×6 cm. Mensajes y dibujos esenciales para tareas y comunicados.
                  </Card.Text>
                  <p style={{ color: "#756197" }}><strong>Medida 3×4 cm o 2×6 cm.</strong></p>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$25.00</p>
                  <Button
                    as="a"
                    href="https://wa.me/50762971297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto align-self-center"
                    style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}
                  >
                    Ver catálogo
                  </Button>

                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 2 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/sello-3x4-frase" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757715697/20250812_165006_pcpzm6.jpg " alt="Sello 3 × 4 con frase" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Sello 3 × 4 con frase</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Diseño más detallado para tareas y planificadores
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$10.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 3 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/fecha-3x4" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757728888/20241018_162601_dge5fs.jpg" alt="Sello Fecha 3 × 4" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Sello Fecha 3 × 4</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Control diario con espacio para firma
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$9.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 4 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/excelente-trabajo" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757711709/20240222_125113_d3mulz.jpg" alt="Excelente trabajo" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Excelente trabajo</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Mensaje motivador para logros destacados
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$8.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>


      <section className="container mb-5" id="docentes-bloque-2">
        <h2 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Grafomotricidad y reforzadores
        </h2>
        <h6 className="text-start mb-4" style={{ color: "#907ab6" }}>
          Tiras 2 × 14 y sellos para hábitos de escritura
        </h6>

        <div className="row g-4">
          {/* 5 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/grafomotricidad-trazos" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757728525/20250903_100227_irqhvd.jpg" alt="Tiras de trazos 2 × 14" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Tiras de trazos 2 × 14</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Guías para practicar líneas y patrones
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$12.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 6 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/hoy-lo-logre" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757715117/20240426_131427_hcyyav.jpg" alt="Hoy lo logré 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Hoy lo logré 2.5 × 2.5</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Refuerzo para metas alcanzadas
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$7.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 7 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/bien-hecho" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757715696/20250812_165037_1_mn0ty4.jpg" alt="Bien hecho 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Bien hecho 2.5 × 2.5</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Frase corta e ícono motivador
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$7.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          {/* 8 */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/sigue-practicando" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757729063/20240226_125151_dirlwd.jpg" alt="Sigue practicando 3 × 4" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Sigue practicando 3 × 4</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Mensaje breve con diseño detallado
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$9.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Ver catálogo
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <Card className="mt-4 border-0" style={{ background: "#b9c174" }}>
          <Card.Body className="py-3 text-center">
            <span className="fw-semi-bold" style={{ fontSize: "1.5rem", color: "#fff" }}>
              Haz que cada corrección y refuerzo sea más creativo y motivador con sellos que hablan por ti.
            </span>
          </Card.Body>
        </Card>
      </section>

      <h4 style={{ textAlign: "center", color: "#907ab6", marginBottom: "40px" }}>
        ¿List@S para transformar tus clases?
      </h4>

      <section className="container text-center my-5">
        <a href="/#kits" className="btn me-3" style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff", backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
          Quiero ver más
        </a>
        <a href="https://wa.me/50762971297" target="_blank" rel="noreferrer" className="btn btn-outline-secondary" style={{ fontSize: "1.4rem" }}>
          Pedir por WhatsApp
        </a>
      </section>
    </>
  );
}