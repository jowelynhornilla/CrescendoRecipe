import { SpecialInterface } from "./../types/special";
import { RecipeInterface } from "types";
import { axios } from "./axios";
import { AxiosResponse } from "axios";

export const getRecipes = async () => {
  const response: AxiosResponse<Array<RecipeInterface>> = await axios.get(
    "recipes"
  );
  return response.data;
};

export const getRecipe = async (uid: string) => {
  const response: AxiosResponse<RecipeInterface> = await axios.get(
    `recipes/${uid}`
  );
  return response.data;
};

export const getSpecials = async (ingredientId: string) => {
  const response: AxiosResponse<Array<SpecialInterface>> = await axios.get(
    "specials",
    {
      params: {
        ...[ingredientId],
      },
    }
  );
  return response.data;
};

export const getSpecial = async (uid: string) => {
  const response: AxiosResponse<any> = await axios.get(`special/${uid}`);
  return response.data;
};
