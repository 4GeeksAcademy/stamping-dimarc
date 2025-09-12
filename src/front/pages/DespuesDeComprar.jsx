import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";

export default function DespuesDeComprar() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-2" style={{ color: "#756197" }}>Después de tu compra</h1>
        <p className=" mb-4" style={{ color: "#756197" }}>Qué sucede desde el pago hasta la entrega</p>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-circle-check fa-2x"></i>
              </div>
              <Card.Title>Confirmación</Card.Title>
              <Card.Text className="small">
                Se confirma tu pago o abono y comienza la elaboración
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-regular fa-clock fa-2x"></i>
              </div>
              <Card.Title>Elaboración</Card.Title>
              <Card.Text className="small">
                Tiempo estimado 8 días hábiles. El día del pago no cuenta
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-box-open fa-2x"></i>
              </div>
              <Card.Title>Revisión y empaque</Card.Title>
              <Card.Text className="small">
                Se verifica el diseño y se embala para protegerlo
              </Card.Text>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-truck fa-2x"></i>
              </div>
              <Card.Title>Coordinación de entrega</Card.Title>
              <Card.Text className="small">
                Definimos entrega personal, delivery o envío al interior. Revisa la página Entregas y Envíos
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-5 mb-3" style={{ color: "#756197" }}>Cuando llega tu sello</h2>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-circle-check fa-2x"></i>
              </div>
              <Card.Title>Prepara el área</Card.Title>
              <Card.Text className="small">Haz pruebas en papel antes del material final</Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-fill-drip fa-2x"></i>
              </div>
              <Card.Title>Aplica la tinta</Card.Title>
              <Card.Text className="small">Toques suaves y repetidos sobre la almohadilla</Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-stamp fa-2x"></i>
              </div>
              <Card.Title>Estampa sin mover</Card.Title>
              <Card.Text className="small">Presiona uniforme y retira con cuidado para evitar borrones</Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-broom fa-2x"></i>
              </div>
              <Card.Title>Limpieza</Card.Title>
              <Card.Text className="small">Paño seco o ligeramente húmedo después de cada uso</Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm p-3 text-center" style={{ color: "#756197" }}>
              <div className="mb-2" style={{ color: "#b9c174" }}>
                <i className="fa-solid fa-box-archive fa-2x"></i>
              </div>
              <Card.Title>Almacenamiento</Card.Title>
              <Card.Text className="small">Guárdalo en un lugar seco y limpio para conservar la calidad</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
