import React from "react";

const RecipeList = ({ recipe }) => {

  if(!Array.isArray(recipe)){
    return <p>No recipes found</p>;
  }

  return (
    <div className="recipe-list">
      {recipe.map((re, index) => (
        <div key={index}>
          <img src={re.image} />
          <h3>{re.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
