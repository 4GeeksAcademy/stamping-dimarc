import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // Barra de navegación superior
    <nav className="navbar sticky-top" style={{ backgroundColor: "#907ab6" }}>
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/4GeeksAcademy/stamping-dimarc/main/src/front/assets/img/logo-horizontal-stamping.png"
            alt="Stamping Dimarc"
            style={{ height: "50px" }}
          />
        </Link>

        {/* Menú */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row me-3">
            <li className="nav-item mx-2"><Link to="/" className="nav-link text-white">Inicio</Link></li>
            <li className="nav-item mx-2"><Link to="/products" className="nav-link text-white">Catálogo</Link></li>
            <li className="nav-item mx-2"><Link to="/contact" className="nav-link text-white">Contacto</Link></li>
            <li className="nav-item mx-2"><Link to="/sellos" className="nav-link text-white">Sellos</Link></li>
            <li className="nav-item mx-2"><Link to="/tintas" className="nav-link text-white">Tintas</Link></li>
          </ul>

          {/* Buscador */}
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
