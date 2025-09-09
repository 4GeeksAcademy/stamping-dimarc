import { Link } from "react-router-dom";


export default function Tintas() {
  return (
    // Sección principal con imagen de fondo
    <section
      className="hero d-flex align-items-center"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dakvux10n/image/upload/v1757347471/banner-tintas_uanwbf.jpg")`,
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

        {/* Isotipo de las tintas */}
        <img
          src="https://res.cloudinary.com/dakvux10n/image/upload/v1757375781/Recurso_1ldpi_knvhfs.png"
          alt="Logo Tintas Dimarc"
          style={{ width: "120px", marginBottom: "20px" }}
        />

        {/* Título*/}
        <h1
          className="display-4"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Próximamente
        </h1>

        {/* Subtítulo con fuente Sansita */}
        <p
          className="lead mt-3"
          style={{ fontFamily: "Sansita Swashed, cursive", maxWidth: "495px", margin: "0 auto" }}
        >
          Estamos preparando nuestra nueva línea de tintas artesanales Ink  Dimarc, creadas para darle
          vida y magia a cada uno de tus sellos.
        </p>

        {/* Botón */}
        <div className="d-flex gap-2 justify-content-center">
          <Link to="/products" className="btn btn-outline-light btn-lg mt-5">
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
