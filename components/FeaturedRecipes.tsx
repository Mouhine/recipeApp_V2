import React, { useEffect, useState } from "react";
import { getPopulareRecipes } from "../utils";
import { Recipe } from "../types/Recipe";
import RecipeCard from "./RecipeCard";
import Link from "next/link";
import Skelton from "./Skelton";
const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getPopulareRecipes(9, setRecipes).then(() => setIsLoading(false));
  }, []);
  return (
    <section className="max-w-5xl w-[100%] mx-auto">
      <div className="flex items-center justify-between py-4 ">
        <h1 className="text-xl">
          Featured <span className="text-[#e66337]"> Recipes</span>
        </h1>
        <Link href={"/search"}>
          <button className="bg-[#e66337] px-6 py-2 rounded-full font-medium text-white">
            View More
          </button>
        </Link>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {loading
          ? [1, 2, 3].map((recipe, i) => {
              return <Skelton key={i} />;
            })
          : recipes.map((recipe, i) => {
              return <RecipeCard recipe={recipe} key={recipe.id} />;
            })}

        {recipes.length === 0 &&
          [1, 2, 3].map((recipe, i) => {
            return <Skelton key={i} />;
          })}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
