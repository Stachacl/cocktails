import React from "react";
import { Link } from "react-router-dom";
import {GiShatteredGlass} from 'react-icons/gi';

const Error = () => {
  return (
    <section className=" row d-flex justify-content-center ">
     <GiShatteredGlass className=" h1"/> 
      <div className="container d-flex justify-content-center">
        <h4> Oops, it is an error...</h4>
      </div>
      <Link to="/" className="btn btn-secondary w-50">
        Press here to search for another cocktail
      </Link>

    </section>
  );
};

export default Error;
