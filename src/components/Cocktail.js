import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="col-4 mb-5">
      <div className="img-container">
        <img src={image} alt={name} class="w-100" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-secondary"> See details</Link>
      </div>
    </article>
  );
};

export default Cocktail;
