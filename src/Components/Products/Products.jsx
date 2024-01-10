import React from "react";
import { images, shipping } from "../Data/Data";



const Products = () => {
  return (
    <section className="products" id="categories">
      <div className="flex-1">
        {images.slice(0, 3).map((item, index) => {
          return <img src={item} alt="Poster Image" key={index} />;
        })}
      </div>
      <div className="flex-2">
        {images.slice(3).map((item, index) => {
          return <img src={item} alt="Poster Image"  key={index}/>;
        })}
      </div>
      


      <div className="shipping">
        {shipping.map((ship,index)=>{
            return(
                <div className="ship-icon" key={index}>
                    <h2>{ship.icon}</h2>
                    <div className="ship-content">
                        <h3>{ship.info}</h3>
                        <p>{ship.info1}</p>
                    </div>
                </div>
            )
        })}
      </div>



    </section>
  );
};

export default Products;
