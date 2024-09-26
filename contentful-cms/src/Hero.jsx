import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            illum quos velit odio eaque, non fuga voluptatem! Asperiores
            incidunt autem laudantium voluptate odit maxime, nemo ab debitis!
            Tenetur, adipisci alias.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
