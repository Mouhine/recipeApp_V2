import React, { useEffect, useState } from "react";
import { Recipe } from "../types/Recipe";
import { getPopulareRecipes } from "../utils";
import RecipeCard from "./RecipeCard";
import Link from "next/link";
import Skelton from "./Skelton";
const TrendyRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getPopulareRecipes(3, setRecipes).then(() => setIsLoading(false));
    console.log(recipes);
  }, []);
  return (
    <div className="max-w-5xl w-[95%] mx-auto  ">
      <section>
        <div className="flex items-center justify-between ">
          <h1 className="text-xl">
            Trendy <span className="text-[#e66337]"> Recipes</span>
          </h1>

          <Link href={"/Search"}>
            <button className="bg-[#e66337] px-6 py-2 rounded-full font-medium text-white">
              View More
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 my-4 ">
        {loading
          ? [1, 2, 3].map((recipe, i) => {
              return <Skelton key={i} />;
            })
          : recipes?.map((recipe, i) => {
              return <RecipeCard recipe={recipe} />;
            })}
        {recipes.length === 0 &&
          [1, 2, 3].map((recipe, i) => {
            return <Skelton key={i} />;
          })}
      </section>
    </div>
  );
};
export {};
export default TrendyRecipes;
