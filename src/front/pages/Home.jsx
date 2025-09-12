import React from "react";
import Hero from "../components/Hero";
import HeroCTA from "../components/HeroCTA";
import Card from "../components/KitCard";
import UnitPriceCard from "../components/UnitPriceCard";
import ClosingBanner from "../components/ClosingBanner";
import CategoriasSection from "../components/CategoriasSection";

export const Home = () => {
  return (
    <>
      <Hero />
      


      <div className="my-5 py-5"></div>

      <HeroCTA />
      <section id="kits" className="container my-5 py-4">
        <CategoriasSection />
        <Card />
      </section>

     

      <section id="individuales" className="container my-5 py-4">
        <UnitPriceCard />
      </section>


      <ClosingBanner />
    </>
  );
};