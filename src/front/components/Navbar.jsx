import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top" style={{ backgroundColor: "#907ab6" }}>
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/4GeeksAcademy/stamping-dimarc/refs/heads/main/src/front/assets/img/logo-horizontal-stamping.png"
            alt="Stamping Dimarc"
            style={{ height: "50px" }}
          />
        </Link>

        {/* Links */}
        <div className="d-flex gap-3">
          <Link to="/" className="text-white text-decoration-none">
            Inicio
          </Link>
          <Link to="/products" className="text-white text-decoration-none">
            Catálogo
          </Link>
          <Link to="/contact" className="text-white text-decoration-none">
            Contacto
          </Link>
          <Link to="/sellos" className="text-white text-decoration-none">
            Sellos
          </Link>
          <Link to="/tintas" className="text-white text-decoration-none">
            Tintas
          </Link>
        </div>

        {/* Buscador */}
        <form className="d-flex" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button
            className="btn btn-light ms-2"
            type="submit"
            style={{ backgroundColor: "#907ab6", color: "white" }}
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};
