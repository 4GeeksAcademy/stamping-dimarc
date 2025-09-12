import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Docentes() {
  return (
    <>
      <header className="container my-4">
        <h1 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Docentes
        </h1>
        <p style={{ color: "#756197", fontSize: "1.7rem" }}>
          Sellos para grafologia, tareas y refuerzos positivos
        </p>
        <p style={{ color: "#756197" }}>
          Catálogo disponible por WhatsApp y opción de diseños personalizados
        </p>
      </header>

      <section className="container mb-5" id="asesoria">
        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Asesoría de tamaños</h2>
        <ul style={{ color: "#756197", fontSize: "1.7rem" }}>
          <li><strong>2.5 × 2.5 cm</strong> diseños sencillos, íconos y frases cortas para refuerzo rápido</li>
          <li><strong>3 × 4 cm</strong> diseño más detallado con frase breve para tareas y agendas</li>
          <li><strong>2 ×14 cm</strong> grafomotricidad con guías de trazos para practicar</li>
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
                <Card.Img variant="top" src="" alt="Pack refuerzo 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Pack refuerzo 2.5 × 2.5</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Íconos y frases cortas para feedback rápido en cuadernos
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$12.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
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
                <Card.Img variant="top" src="" alt="Sello 3 × 4 con frase" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Sello Fecha 3 × 4" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Excelente trabajo" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Tiras de trazos 2 × 14" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Hoy lo logré 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Bien hecho 2.5 × 2.5" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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
                <Card.Img variant="top" src="" alt="Sigue practicando 3 × 4" style={{ height: "380px", objectFit: "cover", background: "#f4f1f8" }} />
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

      <section className="container text-center my-5">
        <a href="/#kits" className="btn me-3" style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff", backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
          Ver catálogo
        </a>
        <a href="https://wa.me/50762971297" target="_blank" rel="noreferrer" className="btn btn-outline-secondary" style={{ fontSize: "1.4rem" }}> 
          Pedir por WhatsApp
        </a>
      </section>
    </>
  );
}