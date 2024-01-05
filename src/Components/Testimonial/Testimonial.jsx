import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ name, fore, img }) => {
  return (
    <section className="testimonial">
      <div className="stars">
        <span><FaStar /></span>
        <span><FaStar /></span>
        <span><FaStar /></span>
        <span><FaStar /></span>
        <span><FaStar /></span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita
        dolor dolorem quo asperiores nulla eum sint reiciendis harum et
        voluptates vel sed amet atque voluptate soluta praesentium. Placeat,
        laudantium!
      </p>

      <div className="person-image">
        <img src={img} alt="image" />
        <div className="contents">
          <h2>{name}</h2>
          <h3>{fore}</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
