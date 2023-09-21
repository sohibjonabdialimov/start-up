import React from "react";
import "./style.css";

const Card = ({ item }) => {
  return (
    <div className="card_wrap">
      <img src={item.img} alt="" />
      <div className="card_div">
        <div className="card_content">
          <p>{item.title}</p>
          <h4>{item.paragraph}</h4>
        </div>
        <button>Watch Lecture</button>
      </div>
    </div>
  );
};

export default Card;
