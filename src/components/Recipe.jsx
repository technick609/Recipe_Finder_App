import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  const Key = "32190cef94514bdf90710264c6c3e674";

  const recipeData = async (query) => {

    if(!query){
      return;
    }

    const API_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${Key}`;

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data)
      if(Array.isArray(data)){
        setRecipe(data);
  
      }
      else{
        setRecipe([]);
      }
    } catch (error) {
      console.log("Error while fetching recipe ", error);
    }
  };

  const SearchRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    recipeData(query);
  }, [query]);


  return (
    <>
      <div className="main-div">
        <h1>Recipe Finder</h1>
        <form onSubmit={SearchRecipe}>
          <input
            type="text"
            placeholder="Search your Recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search Recipes</button>
        </form>
      </div>
      <div className="recipes">
        {recipe && <RecipeList recipe={recipe} />}
      </div>
    </>
  );
};

export default Recipe;
