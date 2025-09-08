import React from "react";
import KitCard from "../components/KitCard";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Emprendedores() {
  return (
    <>
      <header className="container my-4">
        <h1 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Emprendedores</h1>
        <p style={{ color: "#756197", fontSize: "1.7rem" }}>
          Consejos y kits recomendados para marcas y pequeños negocios
        </p>
      </header>

      <section className="container mb-5" id="asesoria">
        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}> Asesoría de tamaños</h2>
        <ul style={{ color: "#756197", fontSize: "1.7rem" }}>
          <li>10x10 cm para impacto en bolsas y cajas medianas</li>
          <li>6x5 cm versátil para la mayoría de empaques</li>
          <li>3x4 cm detalle en tags y bolsitas pequeñas</li>
          <li>2.5x2.5 cm mini iconos o sello secundario</li>
        </ul>
      </section>

      <section className="container mb-5">
        <KitCard />
      </section>

      {/* =====INCIO SECCION DISEÑO GRÁFICO ===== */}
      <section className="container mb-5" id="diseno-grafico">
        <h2 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Diseño gráfico para tu marca
        </h2>
        <h6 className="text-start mb-4" style={{ color: "#907ab6" }}>
          Si aún no tienes logo, te lo creamos y te lo entregamos listo para usar
        </h6>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/logo-basico" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757290724/diseno-grafico-basico_lr38d2.png" alt="Logo básico" style={{ height: "380px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Logo básico</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    AI editable, PNG, JPG, a color y B N
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$50.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pedir ahora
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/identidad-visual-inicial" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757288870/DISE%C3%91O_GRAFICO_STAMPING_lqtsrz.png" alt="Identidad visual inicial" style={{ height: "380px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Identidad visual inicial</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Logo isotipo monograma paleta PDFs color y B N AI PNG JPG
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$100.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pedir ahora
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/vectorizacion-logo" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757293828/vectorizacion-de-logo_z9iet2.png" alt="Vectorización de logo" style={{ height: "380px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Vectorizacion de Logo</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Convierte tu logo a vector en una sola tinta (blanco y negro).
                    Te lo enviamos por correo en formato digital (AI, PNG, JPG), para que puedas usarlo en otras ocasiones.
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$15.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Vectorizar ahora
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/stickers-whatsapp" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="https://res.cloudinary.com/dakvux10n/image/upload/v1757291265/Recurso_1_zae7ja.png" alt="Stickers para WhatsApp" style={{ height: "380px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Stickers para WhatsApp</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Con tus frases más usadas, los colores de tu marca, tu Instagram y elementos visuales que te identifiquen.
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$20.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pedir ahora
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* ===== FIN SECCION DISEÑO GRÁFICO ===== */}

      <section className="container mb-5" id="agradecimientos">
        <h2 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
          Complementos handmade
        </h2>
        <h6 className="text-start mb-4" style={{ color: "#907ab6" }}>
          Frases y detalles para elevar tus empaques
        </h6>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/sello-gracias" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="" alt="Sello Gracias por tu compra" style={{ height: "320px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
                    Sello Gracias por tu compra
                  </Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    3 x 4 cm para tarjetas y bolsitas
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$8.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pídelo aquí
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/sello-hecho-a-mano" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="" alt="Sello Hecho a mano" style={{ height: "320px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
                    Sello Hecho a mano
                  </Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    Estilo artesanal para empaques kraft
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$8.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pídelo aquí
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/pack-agradecimientos" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="" alt="Pack mini agradecimientos" style={{ height: "320px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
                    Pack mini agradecimientos
                  </Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    3 sellos pequeños surtidos
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$18.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pídelo aquí
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to="/producto/pack-agradecimientos" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100">
                <Card.Img variant="top" src="" alt="Pack mini agradecimientos" style={{ height: "320px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                  <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
                    Pack mini agradecimientos
                  </Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                    3 sellos pequeños surtidos
                  </Card.Text>
                  <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$18.00</p>
                  <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                    Pídelo aquí
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* ===== FIN SECCION AGRADECIMIENTOS ===== */}


      <section className="container text-center my-5 ">
        <a href="/#kits" className="btn me-3" style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff", backgroundColor: "#907ab6", borderColor: "#907ab6" }}>Ver todos los kits</a>
        <a href="/#individuales" className="btn btn-outline-secondary" style={{ fontSize: "1.4rem" }}>Ver sellos individuales</a>
      </section>
    </>
  );
}