import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"
import GiftQuoteBubble from "../components/GiftQuoteBubble";
import { useEffect } from "react";


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    useEffect(() => {

        window.history.scrollRestoration = "manual";
}, []);


    return (
        <ScrollToTop>
            <Navbar />
            <main>
            <Outlet />
           <GiftQuoteBubble side="left" />
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