import React from "react";
// import img1 from "../../images/mockup6.png";
// import img from '../../images/background/b2s.png'

const Banner = ({img,off,name,banner1}) => {
  return (
    <section className={`banner ${banner1? "banner1" : ""}`}>
      <div className="banner-content-1">
        <h5>{off}% Off</h5>
        <h2>HAPPY</h2>
        <h2>HOURS</h2>
        <h5>4 Jan To 15 Feb</h5>
      </div>
      <div className="banner-content-2">
        <h3>{name} Solo Air</h3>
        <h2>Winter Sale</h2>
        <p>
          Company that's grown from 270 to 480 employes in the last 12 months
        </p>
        <button>shop</button>
      </div>

      <div className="banner-image">
        <img src={img} alt="poster" />
      </div>
    </section>
  );
};

export default Banner;
