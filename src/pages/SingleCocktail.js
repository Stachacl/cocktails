import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  //call back function - every time the id changes we are fetching this specific cocktail
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          //destructuring data, choosing what to display from data base:
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          //settingg up ingredients array:
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          //set new cocktail function

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  //checking if the id is correct and the cocktail is exist in data base. If not, then:
  if (!cocktail) {
    return <h2> no cocktails to display, try another one</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="container">
      <div className="row px-5">
        <h2>Cocktail {name}</h2>
          <div className="img-container mb-3">
            <img src={image} alt={name} class="w-50"  />
          </div>
        <p>
          <strong> Name : </strong>
          {name}
        </p>
        <p>
          <strong> Glass : </strong>
          {glass}
        </p>
        <p>
          <strong> Category: </strong>
          {category}
        </p>
        <p>
          <strong> Alcoholic : </strong>
          {info}
        </p>
        <p>
          <strong> Ingredients : </strong>
          {ingredients.map((item,index) => {
            return item? <p key={index}>{item}</p> : null
          })}
        </p>
        <p>
          <strong> Instructions : </strong>
          {instructions}
        </p>
        <Link to='/' className="btn btn-secondary w-50"> back home </Link>
      </div>
    </section>
  );
};

export default SingleCocktail;
