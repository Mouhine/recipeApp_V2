import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Recipe } from "../../types/Recipe";
import { getRecipeById } from "../../utils";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipeDetails, setRecipeDetails] = useState({} as Recipe);
  useEffect(() => {
    getRecipeById(id as string, setRecipeDetails);
  });
  return (
    <div className="mt-[80px] max-w-5xl w-[90%] mx-auto flex flex-col space-y-3 items-start  ">
      <div className="h-[400px]">
        <img
          src={recipeDetails.image}
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <h1 className="text-2xl font-medium underline">{recipeDetails.title}</h1>

      <div
        className=" font-mono "
        dangerouslySetInnerHTML={{ __html: recipeDetails.summary as string }}
      ></div>
      <p className="font-meduim text-xl ">Ingredients</p>
      <div className="flex items-center flex-wrap space-x-3">
        {recipeDetails?.extendedIngredients?.map((element, index) => {
          return (
            <section
              key={element.id}
              className="flex items-center space-x-2 border bg-white drop-shadow-sm p-3 my-1 rounded-md"
            >
              <div>{element.aisle + " " + "|"}</div>
              <div>amount : {element.amount + element.unit}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
