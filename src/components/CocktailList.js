import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  //if we cannot fetch cocktails
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="container"> 
      <div className="row px-5">
      <h3>No cocktails match your search criteria, try something else...</h3>
      </div>
      </div>
    );
  }

  return (
    <section className="container">
        <div className="row px-5">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
    </section>
  );
};

export default CocktailList;
