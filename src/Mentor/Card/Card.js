import React from "react";
import './Card.css' ;

const Card = (props) => {
  const {imgSrc,name,description}=props; 
  return (
    <div class="col-lg-3 col-md-4 col-sm-6 ">
      <div className="cards  ">
        <div className="image">
          <img src={imgSrc} alt="" />
        </div>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
          <button> Read more...</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
