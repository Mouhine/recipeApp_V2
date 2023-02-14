import React, { useState } from "react";
export interface AutoCompletRecipe {
  id: number;
  title: string;
  imageType: string;
}
import { autoCompleteSearch } from "../utils";
import Link from "next/link";
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<AutoCompletRecipe[] | []>([]);
  return (
    <div className="relative">
      <input
        type="text"
        className="px-4 py-3 rounded-full w-full outline-none border drop-shadow"
        placeholder="Enter a tag"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          autoCompleteSearch(query, setRecipes);
        }}
      />
      <button className="px-6 py-1 rounded-full bg-orange-600 text-white font-medium absolute right-4 top-2">
        Search
      </button>
      {query && (
        <div className="absolute top-12 max-h-[200px] overflow-y-scroll z-50 w-full bg-white border rounded-md flex flex-col space-y-3 ">
          {recipes.map((recipe, i) => {
            return (
              <Link href={`/recipe/${recipe.id}`} className="cursor-pointer">
                <div>
                  <h2 className="font-medium text-xl  ">{recipe.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
