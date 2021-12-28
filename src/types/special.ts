import { SpecialEnum } from "constant/enum";
export interface SpecialInterface {
  uuid: string;
  ingredientId: string;
  type: SpecialEnum;
  title: string;
  geo: string;
  code?: string;
  text: string;
}

