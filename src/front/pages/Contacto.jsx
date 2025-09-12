import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";

export default function Contacto() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-2" style={{ color: "#756197" }}>Contáctanos</h1>
        <p className="mb-4" style={{ color: "#756197" }}>
          Elige el medio que prefieras. Responderemos lo antes posible.
        </p>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <i className="fa-brands fa-whatsapp fa-2x mb-2" style={{ color: "#b9c174" }}></i>
              <Card.Title>WhatsApp</Card.Title>
              <Card.Text className="small">
                Escríbenos al <strong>6297-1297</strong> para consultas o pedidos.
              </Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <i className="fa-regular fa-envelope fa-2x mb-2" style={{ color: "#b9c174" }}></i>
              <Card.Title>Correo</Card.Title>
              <Card.Text className="small">
                Envía tus dudas a <strong>stampingdimarc@gmail.com</strong>
              </Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}> 
              <i className="fa-brands fa-instagram fa-2x mb-2" style={{ color: "#b9c174" }}></i>
              <Card.Title>Instagram</Card.Title>
              <Card.Text className="small">
                Síguenos y envía DM a <strong>@stampingdimarc</strong>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
