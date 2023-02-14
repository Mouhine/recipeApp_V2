import React from "react";
import { Recipe } from "../types/Recipe";
import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const IMG =
    "https://cdn.pixabay.com/photo/2018/03/12/15/00/cake-3219851__340.jpg";
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className=" rounded-lg p-2  ">
        <div className="border rounded-lg relative ">
          <img
            src={recipe?.image || IMG}
            alt=""
            className="w-full h-full object-fill rounded-lg"
          />
          <div className="bg-black/50 rounded-lg absolute inset-0 h-full w-full  "></div>
          <h2 className=" absolute top-5 px-4 text-white py-3 font-semibold text-lg">
            {recipe?.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
