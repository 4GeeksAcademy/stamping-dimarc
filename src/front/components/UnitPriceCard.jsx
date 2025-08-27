import { Button, Card } from "react-bootstrap";
import img1 from "../assets/img/kit-inicial.jpg";
import img2 from "../assets/img/mini-kit-inicial.jpg";
import img3 from "../assets/img/mini-kit-emprendedor.jpg";
import img4 from "../assets/img/kit-mini-doble.jpg";

export default function BasicCard() {
  return (
    <section className="container my-5">
      {/* row con espacios entre columnas */}
      <div className="row g-4 justify-content-center">
        {/* Móvil: col-12 (una arriba de otra)
            Desktop: varias por fila (ajusta a gusto) */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Card className="h-100">
            <Card.Img variant="top" src={img1} alt="Kit inicial"
              style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
               Logo 10x10cm
              </Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Negocios de ropa, calzado o productos con empaque mediano o grande.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
                $40.00
              </p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Card className="h-100">
            <Card.Img variant="top" src={img2} alt="Mini kit inicial"
              style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Logo o frase
 6x5cm</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Marcas de velas artesanales o jabones, joyería y bisutería, reposterías.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$25.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Card className="h-100">
            <Card.Img variant="top" src={img3} alt="Kit Emprendedor"
              style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Logo o frase, icono 3x4 o 2x6cm</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Marcas de velas artesanales o jabones, joyería y bisutería, reposterías.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$10.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Card className="h-100">
            <Card.Img variant="top" src={img4} alt="Kit Mini Doble"
              style={{ height: "320px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column text-center" style={{ minHeight: "220px" }}>
              <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>Icono 
2.5cmx2.5cm</Card.Title>
              <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
                Ideal para: Decorar bolsas, cajas y etiquetas. Tamaño especial para iconos sencillos.
              </Card.Text>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>$6.00</p>
              <Button className="mt-auto align-self-center" style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}>
                Pídelo aquí
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
