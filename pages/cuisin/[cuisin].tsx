import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Recipe } from "../../types/Recipe";
import { getRecipeByCuisin } from "../../utils";
import RecipeCard from "../../components/RecipeCard";
import Banner from "../../components/Banner";

const Cuisin = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const router = useRouter();
  const { cuisin } = router.query;
  useEffect(() => {
    getRecipeByCuisin(cuisin as string, setRecipes);
  }, []);

  return (
    <div className=" mt-[80px] max-w-5xl mx-auto w-[90%]  ">
      <Banner cuisine={cuisin as string} />
      <section className="grid grid-cols-4 gap-3 max-h-[80vh] overflow-y-scroll scrollbar-hide ">
        {recipes.map((recipe, i) => {
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}
      </section>
    </div>
  );
};

export default Cuisin;
