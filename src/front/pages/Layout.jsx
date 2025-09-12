import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <main>
            <Outlet />
           
            <div className="wa-widget">
            <a href="https://api.whatsapp.com/send?phone=50762971297"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
                aria-label="Escríbenos por WhatsApp"
            >
            <i className="fab fa-whatsapp"></i>
            <span className="wa-bubble">¿Tienes dudas?</span>
            </a>
            </div>
            </main>
            <Footer />
        </ScrollToTop>
    )
}