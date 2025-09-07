import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export const Navbar = () => {
  return (
    // Barra de navegación superior
    <nav className="navbar navbar-dark sticky-top" style={{ backgroundColor: "#907ab6" }}>
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
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link text-white fw-semibold">Inicio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/tintas" className="nav-link text-white fw-semibold ">Tintas</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/tintas" className="nav-link text-white fw-semibold">Contacto</Link>
            </li>
          </ul>


          <ul className="navbar-nav">
            <li className="nav-item mx-0.5 fw-semibold" style={{ color: "white", cursor: "pointer" }}>
              <NavDropdown title="Sellos" id="sellos-dropdown">
                <NavDropdown.Item as={Link} to="/kits">Sellos para Emprendedores</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/individuales">Sellos para Docentes</NavDropdown.Item>

                 {/* Estas son secciones dentro del Home */}
                <NavDropdown.Item href="/#kits">Kits de Sellos</NavDropdown.Item>
                <NavDropdown.Item href="/#individuales">Sellos Individuales</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>

        </div>


        {/* Buscador */}
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};
