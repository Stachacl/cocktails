import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="col-sm-6 col-md-4 col-lg-3  mb-5">
      <div className="img-container mb-3">
        <img src={image} alt={name} class="w-100" />
      </div>
      <div className="cocktail-footer">
        <h4>{name}</h4>
        <h6>{glass}</h6>
        <p><em>{info}</em></p>
        <Link to={`/cocktail/${id}`} className="btn btn-secondary"> See details</Link>
      </div>
    </article>
  );
};

export default Cocktail;
