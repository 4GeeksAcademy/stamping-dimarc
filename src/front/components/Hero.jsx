import { Link } from "react-router-dom";
import heroImg from "../assets/img/hero-stamping.png";

export default function Hero() {
  return (
    <section
      className="hero d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh", 
        position: "relative",
        color: "white"
      }}
    >
      
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

    
      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
        <h1 
  className="display-4" 
  style={{ fontFamily: "'Pacifico', cursive" }}
>
  Bienvenid@ a Stamping Dimarc
</h1>

         <p className="lead mt-3" style={{ fontFamily: "Sansita Swashed, cursive", maxWidth: "495px", margin: "0 auto" }}>
    Aquí creemos en marcas con esencia, en detalles que hablan, y en sellos que reflejan lo que eres.
  </p>
        <div className="d-flex gap-2 justify-content-center">
        
          <Link to="/products" className="btn btn-outline-light btn-lg mt-5">Ver catálogo</Link>
        </div>
      </div>
    </section>
  );
}

