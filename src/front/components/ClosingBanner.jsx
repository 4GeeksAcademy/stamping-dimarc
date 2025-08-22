

import React from "react";
import BannerImage from "../assets/img/banner-final-stamping.jpg"
import Logo from "../assets/img/monograma-stamping.png"

const ClosingBanner = () => {


    return (
        <section
            className=" bg-light d-flex align-items-center justify-content-center p-4"
            style={{
                backgroundImage: `url(${BannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "80vh",
                position: "relative",
                color: "white",
                overflow: "hidden", // Added overflow option here
            }}
        >
            <div className="position-relative">
                {/* Main Card */}
                <div
                    className="bg-white rounded p-5 mx-auto text-center position-relative"
                    style={{ maxWidth: "42rem", overflow: "visible" }} // You can change to "hidden", "auto", etc.
                >
                    {/* Circular Image with Cut-out Effect */}
                    <div
                        className="position-absolute start-50 translate-middle-x"
                        style={{ top: "-4rem", overflow: "visible" }}
                    >
                        <div
                            className="rounded-circle bg-white p-1 d-flex align-items-center justify-content-center"
                            style={{ width: "8rem", height: "8rem", overflow: "visible", border: "8px solid #f5f9e7" }}
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-5">
                        <h2
                            className="fs-4 fw-medium mb-2"
                            style={{ color: "#6d28d9", lineHeight: "1.5" }}
                        >
                            El empaque es más que papel. Más que tinta.<br />
                            Es tu historia, tu huella, tu esencia.
                        </h2>
                    </div>
                </div>
                <div
                    className="fs-3 fst-italic text-center mt-4"
                    style={{ fontFamily: "serif", color: "#6d28d9" }}
                >
                    ¡Gracias por confiar en mi marca!
                </div>
            </div>
        </section>
    )
}

export default ClosingBanner;