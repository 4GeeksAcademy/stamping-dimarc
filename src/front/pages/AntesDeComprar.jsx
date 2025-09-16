import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import React from "react";

export default function AntesDeComprar() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-2" style={{ color: "#756197" }}>Cómo hacer tu pedido</h1>
        <p className="mb-4" style={{ color: "#756197" }}>Sigue estos pasos y, si tienes dudas, visita Asesoría</p>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-circle-check fa-2x"></i>
              </div>
              <Card.Title>Elige el tamaño o el kit</Card.Title>
              <Card.Text className="small">
                Si no estás segura del tamaño, revisa la guía en Asesoría o escríbeme por WhatsApp
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-file-pdf fa-2x"></i>
              </div>
              <Card.Title>Envía tu diseño</Card.Title>
              <Card.Text className="small">
                Formato PDF en blanco y negro. Si lo tienes a color, puedo evaluar conversión
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-money-bill-wave fa-2x"></i>
              </div>
              <Card.Title>Pago o abono</Card.Title>
              <Card.Text className="small">
                Cancela el total o abona 50 %. Yappy 6297-1297 o transferencia. El saldo se cancela cuando el pedido esté listo
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-regular fa-images fa-2x"></i>
              </div>
              <Card.Title>Catálogo de prediseñados</Card.Title>
              <Card.Text className="small">
                Frases, íconos y estilos listos para elegir. Pídelo por WhatsApp o revisa Catálogo
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <Card className="mt-4 border-0" style={{ background: "#b9c174" }}>
          <Card.Body className="py-3">
            <Badge bg="secondary" className="me-2" style={{ background: "#756197" }}>Importante</Badge>
            <span className="fw-semi-bold" style={{ color: "white" }}>
              Compra mínima 20 USD se cancela el total • Pedidos desde 21 USD pueden abonarse con 50 %
            </span>
          </Card.Body>
        </Card>

        <h2 className="mt-5 mb-3" style={{ color: "#756197" }}>Asesoría de tamaños</h2>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-ruler-combined fa-2x"></i>
              </div>
              <Card.Title style={{ color: "#756197" }}>Cómo medir tu logo</Card.Title>
              <Card.Text className="small" style={{ color: "#756197" }}>
                Coloca una regla sobre el ancho y alto de tu logo en pantalla o impreso. Anota esas medidas en cm. Si no puedes imprimir, mide directo en la pantalla con una regla física.
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-bag-shopping fa-2x"></i>
              </div>
              <Card.Title style={{ color: "#756197" }}>Tamaños recomendados</Card.Title>
              <Card.Text as="ul" className="small text-start" style={{ color: "#756197" }}>
                <li>Bolsa 30×26 cm: sello 10×10 cm</li>
                <li>Bolsa 25×16 cm: sello 6×5 cm</li>
                <li>Bolsa 15×12 cm: sello 3×4 cm o 2×6 cm</li>
                <li>Mini decorativos: 2.5×2.5 cm</li>
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-regular fa-square fa-2x"></i>
              </div>
              <Card.Title style={{ color: "#756197" }}>Cuadrado vs rectangular</Card.Title>
              <Card.Text className="small" style={{ color: "#756197" }}>
                Los sellos cuadrados se perciben más grandes y llenan mejor el espacio. Los rectangulares se ven más angostos aunque midan lo mismo.
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-wand-magic-sparkles fa-2x"></i>
              </div>
              <Card.Title style={{ color: "#756197" }}>Mejor versión del logo</Card.Title>
              <Card.Text className="small" style={{ color: "#756197" }}>
                Evita textos muy pequeños o detalles finos. Prefiere versiones simples y legibles con buen contraste para que el sello luzca nítido.
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <h1 className="mt-5 mb-5" style={{color: "#756197"  }}>Ejemplos por tamaño</h1>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img
                src="https://res.cloudinary.com/dakvux10n/image/upload/v1757710329/1_prplpq.png"
                alt="Bolsa grande 30 × 26 cm"
                style={{ height: 800, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "'Pacifico', cursive", fontSize: "2rem", color: "#756197" }}>Bolsa grande 30 × 26 cm</Card.Title>
                <Card.Text style={{ color: "#756197", fontSize: "1.4rem" }}>
                  Sello recomendado 10×10 cm como logo principal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img
                src="https://res.cloudinary.com/dakvux10n/image/upload/v1757710329/2_knlpng.png"
                alt="Bolsa mediana 25 × 16 cm"
                style={{ height: 800, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "'Pacifico', cursive", fontSize: "2rem", color: "#756197" }}>Bolsa mediana 25 × 16 cm</Card.Title>
                <Card.Text style={{ color: "#756197", fontSize: "1.4rem" }}>
                  Sello recomendado 6×5 cm como logo principal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img
                src="https://res.cloudinary.com/dakvux10n/image/upload/v1757710330/3_jnfrv2.png"
                alt="Bolsa pequeña 15 × 12 cm"
                style={{ height: 800, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "'Pacifico', cursive", fontSize: "2rem", color: "#756197" }}>Bolsa pequeña 15 × 12 cm</Card.Title>
                <Card.Text style={{ color: "#756197", fontSize: "1.4rem" }}>
                  Sello recomendado 3×4 cm o 2×6 cm para datos/agradecimiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img
                src="https://res.cloudinary.com/dakvux10n/image/upload/v1757710330/4_ed3ezq.png"
                alt="Mini decorativos 2.5 × 2.5 cm"
                style={{ height: 800, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "'Pacifico', cursive", fontSize: "2rem", color: "#756197" }}>Mini decorativos</Card.Title>
                <Card.Text style={{ color: "#756197", fontSize: "1.4rem" }}>
                  Sellos de 2.5×2.5 cm para íconos sencillos y patrones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mt-4 border-0" style={{ background: "#b9c174" }}>
          <Card.Body className="py-3">
            <span className="fw-semi-bold" style={{ color: "#fff" }}>
              Las medidas del sello son proporcionales al diseño y al espacio donde vayas a estampar
            </span>
          </Card.Body>
        </Card>

        <p className="mt-3 small" style={{ color: "#756197" }}>
          ¿Tienes dudas? Envíame una foto de tu bolsa por WhatsApp y te recomiendo el tamaño ideal
        </p>
      </Container>
    </section>
  );
}
