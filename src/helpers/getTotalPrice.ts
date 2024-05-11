import { IngredientNames, Ingredients } from "@/interfaces/Ingredients";
import { IngredientPrices } from "./IngPrice";

export const getTotalPrice = (ings: Ingredients): number => {
    return Object.keys(ings).reduce((total, ingName) => {
        total += IngredientPrices[ingName as IngredientNames] * ings[ingName as IngredientNames];
        return total;
      }, 150)
};