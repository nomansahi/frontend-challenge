import React from "react";

function Card(props) {
  const { title, image, description } = props.data;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
