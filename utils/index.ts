import React from "react";
import axios from "axios";
import { Recipe } from "../types/Recipe";
import { Article } from "../types/Blog";
import { AutoCompletRecipe } from "../components/SearchInput";

type setRecipes = React.Dispatch<React.SetStateAction<[] | Recipe[]>>;
export const getPopulareRecipes = async (
  number: number,
  setRecipes: setRecipes
) => {
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=${number}&tags=vegetarian,dessert`;
  try {
    const response = await axios.get(URL);
    console.log(response);
    setRecipes(response.data.recipes);
  } catch (error) {}
};
type setArticles = React.Dispatch<React.SetStateAction<[] | Article[]>>;
export const getBlogs = async (setArticles: setArticles) => {
  try {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: "recipe", lang: "en" },
      headers: {
        "X-RapidAPI-Key": "85604dcac8mshc557fe3113efe12p17f4a6jsn8a5be2c99842",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    setArticles(response.data.articles);
  } catch (error) {
    console.log(error);
  }
};
export const getRecipeByCuisin = async (
  cuisine: string,
  setRecipes: setRecipes
) => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${cuisine}&number=20`;
    const response = await axios.get(url);
    setRecipes(response.data.recipes);
  } catch (error) {
    console.log(error);
  }
};
export const getRecipeByDiet = async (diet: string, setRecipes: setRecipes) => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&diet=${diet}&number=20`;
    const response = await axios.get(url);
    setRecipes(response.data.recipes);
  } catch (error) {
    console.log(error);
  }
};
type setAutoRecipes = React.Dispatch<
  React.SetStateAction<[] | AutoCompletRecipe[]>
>;

export const autoCompleteSearch = async (
  query: string,
  setRecipes: setAutoRecipes
) => {
  try {
    const url = `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=10&query=${query}`;
    const response = await axios.get(url);
    console.log(response);
    setRecipes((await response).data);
  } catch (error) {}
};

type setRecipeDetails = React.Dispatch<React.SetStateAction<Recipe>>;

export const getRecipeById = async (
  id: string,
  setRecipeDetails: setRecipeDetails
) => {
  try {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`;
    const response = await axios.get(url);
    console.log(response);
    setRecipeDetails(response.data);
  } catch (error) {}
};
