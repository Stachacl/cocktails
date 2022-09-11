import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() =>{
    searchValue.current.focus()
  }, [])


  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  //to prevent reloading if user press enter on the empty form
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div class="container my-5">
      <div class="row bg-light px-5 py-3 shadow">
        <div class="col-4">
          <strong>
            <em>Start typing the cocktail name </em>
          </strong>
        </div>
        <div class="col-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              class="form-control"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
