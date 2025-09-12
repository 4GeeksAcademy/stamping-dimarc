import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";

export default function EntregasyEnvios() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-2" style={{ color: "#756197" }}>Entregas y envíos</h1>
        <p className="mb-4" style={{ color: "#756197" }}>Información para coordinar tu pedido</p>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-location-dot fa-2x"></i>
              </div>
              <Card.Title>Entregas personales</Card.Title>
              <Card.Text as="ul" className="small text-start">
                <li>8 días después del pago o abono</li>
                <li>Lunes a viernes: Avenida T. Lefevre 6:00 pm – 8:00 pm</li>
                <li>Sábados: Multiplaza 12:00 md – 1:00 pm</li>
                <li>Sábados: Avenida T. Lefevre 1:30 pm – 5:00 pm</li>
                <li>Domingos no hay entregas</li>
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-motorcycle fa-2x"></i>
              </div>
              <Card.Title>Delivery ciudad</Card.Title>
              <Card.Text as="ul" className="small text-start">
                <li>Desde $4.00 según el área</li>
                <li>Enviar ubicación exacta</li>
                <li>Nombre de quien recibe</li>
                <li>Horario disponible para entregar</li>
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-truck fa-2x"></i>
              </div>
              <Card.Title>Envíos al interior</Card.Title>
              <Card.Text as="ul" className="small text-start">
                <li>Uno Express desde $6.50</li>
                <li>Fletes Chavales desde $4.00</li>
                <li>Se paga antes de enviar</li>
                <li>El costo corre por cuenta del cliente</li>
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-star fa-2x"></i>
              </div>
              <Card.Title>Coordinación especial</Card.Title>
              <Card.Text as="ul" className="small text-start">
                <li>Si necesitas otro punto de entrega, podemos coordinar una opción diferente según disponibilidad</li>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
