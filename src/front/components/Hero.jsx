import { useEffect, useState } from "react";
import heroImg from "../assets/img/hero-stamping.png";

export default function Hero() {

  const frases = [
    "Aquí creemos en marcas con esencia, en detalles que hablan, y en sellos que reflejan lo que eres.",
    "Estampa tu esencia",
    "Tu empaque habla por ti",
    "Haz que cada detalle cuente",
    "Crea con pasión y estilo"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);


  return (
    
    // Sección principal con imagen de fondo
    <section
      className="hero hero-zoom d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        position: "relative",
        color: "white"
      }}
    >
      {/* Capa oscura encima del fondo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1
        }}
      ></div>

      {/* Contenido principal */}
      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>

        {/* Título con fuente Pacifico */}
        <h1
          className="display-2"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Bienvenid@ a Stamping Dimarc
        </h1>

        {/* Frase rotativa */}
        <p
          className="mt-5"
          style={{
            fontSize: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto",
            fontWeight: "400",
            transition: "opacity 1s ease"
          }}
        >
          {frases[index]}
        </p>
      </div>
    </section>
  );
}
