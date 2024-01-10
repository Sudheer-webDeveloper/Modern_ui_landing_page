import React from "react";
import { data } from "../Data/Data";
import img from "../../images/data1.png";

const Items = () => {
  return (

    <section className="items" id="products">
      <div className="item-image">
        <img src={img} alt="men with headsets" />
      </div>
      <div className="second-items">
        {data.map((item, index) => {
          return (
            <div className="item" key={item.id}>
                <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <h4>${item.price}</h4>
            </div>
          );
        })}
      </div>
    </section>

  );
};

export default Items;
