
import { Button, Card } from "react-bootstrap";
import img1 from "../assets/img/kit-inicial.jpg";
import img2 from "../assets/img/mini-kit-inicial.jpg";
import img3 from "../assets/img/mini-kit-emprendedor.jpg";
import img4 from "../assets/img/kit-mini-doble.jpg";

export default function BasicCard() {
  return (
    <div
      className="d-flex gap-4 justify-content-center"
      style={{ overflowX: "auto", flexWrap: "nowrap" }}
    >
      {/* Card 1 */}
      <Card className="d-flex flex-column h-100" style={{ width: "22rem" }}>
  <Card.Img 
    variant="top" 
    src={img1} 
    alt="Kit inicial" 
    style={{ height: "320px", objectFit: "cover" }} 
  />
  <Card.Body 
    className="d-flex flex-column text-center" 
    style={{ minHeight: "220px" }}
  >
    {/* Título con Pacifico */}
    <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
      Kit inicial
    </Card.Title>

    {/* Texto en morado */}
    <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
      Ideal para: Negocios de ropa, calzado o productos con empaque mediano o grande.
    </Card.Text>

    {/* Precio */}
    <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
      $45.00
    </p>

    <Button 
      className="mt-auto align-self-center" 
      style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}
    >
      Pídelo aquí
    </Button>
  </Card.Body>
</Card>


      {/* Card 2 */}
<Card className="d-flex flex-column h-100" style={{ width: "22rem" }}>
  <Card.Img 
    variant="top" 
    src={img2} 
    alt="Mini kit inicial" 
    style={{ height: "320px", objectFit: "cover" }} 
  />
  <Card.Body 
    className="d-flex flex-column text-center" 
    style={{ minHeight: "220px" }}
  >
    {/* Título Pacifico en morado */}
    <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
      Mini Kit
    </Card.Title>

    {/* Texto en morado */}
    <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
     Ideal para: Marcas de velas artesanales o jabones Joyería y bisutería, Reposterías .
    </Card.Text>

    {/* Precio */}
    <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
      $30.00
    </p>

    <Button 
      className="mt-auto align-self-center" 
      style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}
    >
      Pídelo aquí
    </Button>
  </Card.Body>
</Card>

     {/* Card 3 */}
<Card className="d-flex flex-column h-100" style={{ width: "22rem" }}>
  <Card.Img 
    variant="top" 
    src={img3} 
    alt="Mini Kit Emprendedor" 
    style={{ height: "320px", objectFit: "cover" }} 
  />
  <Card.Body 
    className="d-flex flex-column text-center" 
    style={{ minHeight: "220px" }}
  >
    {/* Título */}
    <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
      Kit Emprendedor
    </Card.Title>

    {/* Texto */}
    <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
      Ideal para: Marcas de velas artesanales o jabones Joyería y bisutería, Reposterías .
    </Card.Text>

    {/* Precio */}
    <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
      $32.00
    </p>

    {/* Botón */}
    <Button 
      className="mt-auto align-self-center" 
      style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}
    >
      Pídelo aquí
    </Button>
  </Card.Body>
</Card>


    {/* Card 4 */}
<Card className="d-flex flex-column h-100" style={{ width: "22rem" }}>
  <Card.Img 
    variant="top" 
    src={img4} 
    alt="Kit Mini Doble" 
    style={{ height: "320px", objectFit: "cover" }} 
  />
  <Card.Body 
    className="d-flex flex-column text-center" 
    style={{ minHeight: "220px" }}
  >
    {/* Título */}
    <Card.Title style={{ fontFamily: "'Pacifico', cursive", color: "#756197" }}>
      Kit Mini Doble
    </Card.Title>

    {/* Texto */}
    <Card.Text className="flex-grow-1" style={{ color: "#756197" }}>
      Ideal para: Decorar bolsas, cajas y etiquetas, este tamaño es especial para iconos sencilllos.
    </Card.Text>

    {/* Precio */}
    <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#756197", margin: "8px 0" }}>
      $22.00
    </p>

    {/* Botón */}
    <Button 
      className="mt-auto align-self-center" 
      style={{ backgroundColor: "#907ab6", borderColor: "#907ab6" }}
    >
      Pídelo aquí
    </Button>
  </Card.Body>
</Card>

    </div>
  );
}
