import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../assets/img/kit-inicial.jpg";
import img2 from "../assets/img/mini-kit-inicial.jpg";
import img3 from "../assets/img/mini-kit-emprendedor.jpg";
import img4 from "../assets/img/kit-mini-doble.jpg";

export default function BasicCard() {
  return (
    <section className="container my-5">
      {/* Encabezado de sección: FUERA del row */}
      <h2 className="text-start mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
        Kit de Sellos
      </h2>
      <h6 className="text-start mb-4" style={{ color: "#907ab6" }}>
        Todo lo que necesitas en un solo paquete
      </h6>

      {/* Grilla */}
      <div className="row g-4 justify-content-center">
        {/* 1) Kit inicial */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Link to="/producto/kit-inicial" style={{ textDecoration: "none", color: "inherit" }}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={img1}
                alt="Kit inicial"
                style={{ height: "320px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
                <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
                  Kit inicial
                </Card.Title>
                <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                  Ideal para: Negocios de ropa, calzado o productos con empaque mediano o grande.
                </Card.Text>
                <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
                  $45.00
                </p>
                <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          </Link>
        </div>

        {/* 2) Mini Kit */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Link to="/producto/mini-kit-inicial" style={{ textDecoration: "none", color: "inherit" }}>
          <Card className="h-100">
            <Card.Img variant="top" src={img2} alt="Mini kit inicial" style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Mini Kit</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Marcas de velas artesanales o jabones, joyería y bisutería, reposterías.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$30.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
          </Link>
        </div>

        {/* 3) Kit Emprendedor */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Link to="/producto/mini-kit-emprendedor" style={{ textDecoration: "none", color: "inherit" }}>
          <Card className="h-100">
            <Card.Img variant="top" src={img3} alt="Kit Emprendedor" style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Kit Emprendedor</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Marcas de velas artesanales o jabones, joyería y bisutería, reposterías.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$32.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
          </Link>
        </div>

        {/* 4) Kit Mini Doble */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Link to="/producto/kit-mini-doble" style={{ textDecoration: "none", color: "inherit" }}>
          <Card className="h-100">
            <Card.Img variant="top" src={img4} alt="Kit Mini Doble" style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Kit Mini Doble</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Decorar bolsas, cajas y etiquetas. Tamaño especial para iconos sencillos.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$22.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
