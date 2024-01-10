import React from "react";
import img from "../../images/background/b81s.png";

const Hero = () => {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <h3>Beats Solo</h3>
          <h2>Wireless</h2>
          <div className="heading">
            <h1>HEAD</h1>
            <h1>PHONE</h1>
          </div>
          <button>Shop By Category</button>
        </div>
        <div className="hero-discription">
          <h4>Discription</h4>
          <p>There are Many styles but this is very unique!</p>
        </div>
        <div className="hero-image">
          <img src={img} alt="headset" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
