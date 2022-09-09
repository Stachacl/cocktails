import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <div className="row px-5">
            <div className="col-7"></div>
            <div className="col-5">
              <img src="https://ik.imagekit.io/stcl/Drinks/black_cocktail_okXSP3nR0?ik-sdk-version=javascript-1.4.3&updatedAt=1662702948939" alt="black colour cocktail" className="w-100"/>
            </div>
          </div>
        </div>
      </div>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
