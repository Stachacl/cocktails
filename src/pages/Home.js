import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <div className="row px-5 align-items-center">
            <div className="col-md-6">
              <p><small>Featured</small></p>
              <h4>Black Lady Cocktail</h4>
              <h6>Coupe glass</h6>
              <p> This striking cocktail gets its color from crème de noir and a creamy boost from an egg white shaken into the mix. The subtle, sweet perfume of blackberry is a perfect complement to herby gin. Together, they taste like the height of sophistication</p>
              <p>
                <em>Alcoholic</em>
              </p>
            </div>

            {/* empty container: */}
            <div className="col-1">
            </div>

            <div className="col-md-5">
              <img
                src="https://ik.imagekit.io/stcl/Drinks/black_cocktail_okXSP3nR0?ik-sdk-version=javascript-1.4.3&updatedAt=1662702948939"
                alt="black colour cocktail"
                className="w-100"
              />
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
