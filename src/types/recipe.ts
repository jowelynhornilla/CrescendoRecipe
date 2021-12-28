import { SpecialInterface } from "types";

export interface RecipeInterface {
  uuid: string;
  title: string;
  description: string;
  images: RecipeImageInterface;
  servings: number;
  prepTime: number;
  cookTime: number;
  postDate: string;
  editDate: string;
  ingredients?: Array<IngredientInterface>;
  directions?: Array<DirectionInterface>;
}

export interface IngredientInterface {
  uuid: string;
  amount: number;
  measurement: string;
  name: string;
  specials?: Array<SpecialInterface>;
}
export interface DirectionInterface {
  instructions: string;
  optional: boolean;
}

export interface RecipeImageInterface {
  full: string;
  medium: string;
  small: string;
}
