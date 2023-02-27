import React, { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Link from "next/link";
import { getRecipeByDiet } from "../utils";
import { Recipe } from "../types/Recipe";
import RecipeCard from "../components/RecipeCard";
import { getPopulareRecipes } from "../utils";
import { getRecipeByCuisin } from "../utils";
import Skelton from "../components/Skelton";
import { useRouter } from "next/router";
const Search = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState();

  useEffect(() => {
    setLoading(true);
    getPopulareRecipes(10, setRecipes).then(() => setLoading(false));
  }, [isChanged]);
  const CUISINS = [
    {
      img: "https://cdn.pixabay.com/photo/2016/10/30/17/39/germany-flag-1783774_960_720.png",
      title: "German Cuisin",
      tag: "german",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_960_720.png",
      title: "India Cuisin",
      tag: "indian",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/26/11/55/flag-42281_960_720.png",
      title: "Mexican Cuisin",
      tag: "mexican",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_960_720.png",
      title: "British Cuisin",
      tag: "british",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/11/15/33/spain-28530_960_720.png",
      title: "Spanish Cuisin",
      tag: "spanish",
    },

    {
      img: "https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834__340.png",
      title: "Vietnam Cuisin",
      tag: "vietnamese",
    },
  ];
  const DIETS = [
    {
      title: "Gluten Free",
      name: "gluten free",
    },
    {
      title: "Ketogenic",
      name: "ketogenic",
    },
    {
      title: "Vegetarian",
      name: "vegetarian",
    },
    {
      title: "Paleo",
      name: "paleo",
    },
  ];
  return (
    <div className="max-w-6xl mt-[80px] w-[100%] px-2 mx-auto ">
      <section className="flex gap-4 items-center justify-between flex-wrap ">
        <div className="max-w-5xl w-full mx-auto ">
          <SearchInput />
        </div>
        <div className="flex justify-between items-center  ">
          <h1
            className="text-xl font-medium  
          w-32"
          >
            Diets :
          </h1>
          <ul className="flex items-center flex-wrap space-x-3  cursor-pointer">
            {DIETS.map((d, i) => {
              return (
                <li
                  className="py-1 px-4 rounded border bg-white my-1 transition-transform delay-100 hover:scale-110 "
                  onClick={() => {
                    setLoading(true);
                    getRecipeByDiet(d.name, setRecipes).then(() =>
                      setLoading(false)
                    );
                  }}
                >
                  {d.title}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="grid md:grid-cols-12 my-4 gap-4 ">
        <aside className=" col-span-12 md:col-span-3 lg:col-span-2 flex flex-col items-start px-1  bg-white rounded drop-shadow ">
          <h1 className="text-xl font-medium  py-2">Cuisines</h1>
          <section className=" flex space-x-4 md:space-x-0 md:grid md:grid-rows-3 lg:grid-rows-6 gap-2 py-1 place-self-start  ">
            {CUISINS.map((c, i) => {
              return (
                <section
                  className="flex items-center space-x-2  cursor-pointer border rounded w-full px-1 py-1 transition-transform delay-100 hover:scale-110 "
                  onClick={() => {
                    setLoading(true);
                    getRecipeByCuisin(c.tag, setRecipes).then(() =>
                      setLoading(false)
                    );
                  }}
                >
                  <div className="  flex flex-col space-y-3 items-center  ">
                    <img src={c.img} alt="" className="w-6 h-6 rounded-full " />
                  </div>
                  <p className="cursor-pointer hidden md:block ">{c.title}</p>
                </section>
              );
            })}
          </section>
        </aside>
        <div className="grid md:grid-cols-2  grid-cols-2 lg:grid-cols-3 gap-3 col-span-12 md:col-span-9 max-h-[60vh] overflow-y-scroll">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((recipe, i) => {
                return <Skelton key={i} />;
              })
            : recipes.map((recipe, i) => {
                return <RecipeCard recipe={recipe} key={recipe.id} />;
              })}

          {recipes.length === 0 &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((recipe, i) => {
              return <Skelton key={i} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Search;
