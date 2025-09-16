import { Container, Row, Col, Card } from "react-bootstrap";

export default function Asesorias() {
  return (
    <section className="py-5">
      <Container>
        <h1 style={{ color:"#756197" }}>Asesorías de tamaños</h1>
        <p className="mb-4">Mira ejemplos reales y aprende a medir tu logo para elegir el sello ideal</p>

        {/* Galeria imágenes grandes */}
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img src="IMG_BOLSA_1" alt="Bolsa pequeña 15x12" style={{height: 360, objectFit:"cover"}} />
              <Card.Body>
                <Card.Title style={{color:"#756197"}}>Bolsa pequeña 15 × 12 cm</Card.Title>
                <Card.Text className="small">
                  Sello sugerido 5–6 cm. Las medidas dependen del área visible y del formato del logo
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img src="IMG_BOLSA_2" alt="Bolsa mediana 25x16" style={{height: 360, objectFit:"cover"}} />
              <Card.Body>
                <Card.Title style={{color:"#756197"}}>Bolsa mediana 25 × 16 cm</Card.Title>
                <Card.Text className="small">
                  Sello sugerido 8–10 cm. Si el logo es rectangular se percibe más pequeño
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img src="IMG_BOLSA_3" alt="Bolsa grande 30x26" style={{height: 360, objectFit:"cover"}} />
              <Card.Body>
                <Card.Title style={{color:"#756197"}}>Bolsa grande 30 × 26 cm</Card.Title>
                <Card.Text className="small">Sello sugerido 10–12 cm para impacto al centro</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Img src="IMG_TAGS" alt="Área etiquetas" style={{height: 360, objectFit:"cover"}} />
              <Card.Body>
                <Card.Title style={{color:"#756197"}}>Área para etiquetas</Card.Title>
                <Card.Text className="small">Sello sugerido 3–4 cm para tags y tarjetas</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Bloque Cómo medir tu logo: icon cards */}
        <h2 className="mt-5" style={{ color:"#756197" }}>Cómo medir tu logo</h2>
        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <i className="fa-solid fa-ruler-combined mb-2" style={{color:"#b9c174"}}></i>
              <Card.Title>Usa una regla</Card.Title>
              <Card.Text className="small">
                Mide ancho y alto en pantalla o impreso. Anota en centímetros
              </Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <i className="fa-solid fa-bag-shopping mb-2" style={{color:"#b9c174"}}></i>
              <Card.Title>Tamaños sugeridos</Card.Title>
              <Card.Text as="ul" className="small text-start" style={{color:"#756197"}}>
                <li>Bolsas pequeñas 5–6 cm</li>
                <li>Bolsas medianas 8–10 cm</li>
                <li>Bolsas grandes 10–12 cm</li>
                <li>Etiquetas 3–4 cm</li>
              </Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <i className="fa-regular fa-square mb-2" style={{color:"#b9c174"}}></i>
              <Card.Title>Cuadrado vs rectangular</Card.Title>
              <Card.Text className="small">
                Cuadrados se perciben más grandes. Rectangulares lucen más angostos
              </Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm p-3 text-start">
              <i className="fa-solid fa-wand-magic-sparkles mb-2" style={{color:"#b9c174"}}></i>
              <Card.Title>Mejor versión</Card.Title>
              <Card.Text className="small">
                Evita textos mini. Busca formas simples y contraste alto
              </Card.Text>
            </Card>
          </Col>
        </Row>

        {/* Aviso de proporcionalidad */}
        <Card className="mt-4 border-0" style={{ background:"#efeaf8" }}>
          <Card.Body className="py-3">
            <span className="small" style={{color:"#756197"}}>
              Las medidas del sello son proporcionales al diseño y al espacio donde selles
            </span>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
