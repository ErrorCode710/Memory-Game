import { useState } from "react";
import style from "../styles/card.module.css";
function Card({ img, name, onClick }) {
  return (
    <div className={style.card} onClick={onClick}>
      <img src={img}></img>
      <h4 className="card-label">
        {name.split(" ")[0]}
        <br />
        {name.split(" ")[1]}
      </h4>
    </div>
  );
}

export default Card;
