import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <div className="hero-img">
        <img src="https://ik.imagekit.io/stcl/Drinks/black-magic_Yr1asZ-fJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662544788470" alt="black colour cocktail" className="hero-img"/>
      </div>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
