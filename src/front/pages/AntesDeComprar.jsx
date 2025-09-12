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
      </Container>
    </section>
  );
}
