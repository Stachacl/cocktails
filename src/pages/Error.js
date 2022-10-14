import React from "react";
import { Link } from "react-router-dom";
import {GiShatteredGlass} from 'react-icons/gi';

const Error = () => {
  return (
    <section className=" row d-flex justify-content-center ">
      <GiShatteredGlass />
      <div className="container d-flex justify-content-center">
        <h4> Oops, it is an error...</h4>
      </div>
      <Link to="/" className="btn btn-secondary w-50">
        back home
      </Link>

    </section>
  );
};

export default Error;
