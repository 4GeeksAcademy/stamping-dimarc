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

        {/* Buscador */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};
