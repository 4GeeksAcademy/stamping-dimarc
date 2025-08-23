import React from "react";
import Hero from "../components/Hero";
import HeroCTA from "../components/HeroCTA";
import Card from "../components/KitCard";

export const Home = () => {
  return (
    <>
      <Hero />

    
      <div className="my-5 py-5"></div>

      <HeroCTA />

      
      <div className="my-5 py-5"></div>

      <section className="container my-5 py-4">
        <Card/>
      </section>
    </>
  );
};