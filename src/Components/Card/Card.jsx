import React from "react";
import img from '../../images/mockup1.webp'
import img1 from '../../images/headset11.jpeg'

const Card = () => {
  return (
    <section className="card">
      <div className="card-image">
        <img src={img1} alt="loptop" />
      </div>
      <div className="content">
        <h2>We Provide You</h2>
        <h2>the best Devices</h2>
        <p>
          Headphones let a single user listen to an audio source privately, in
          contrast to a loudspeaker, which emits sound into the open air for
          anyone nearby to hear. Headphones are also known as earphones or,
          colloquially, cans.
        </p>
        <button>Buy Now</button>
      </div>
    </section>
  );
};

export default Card;
