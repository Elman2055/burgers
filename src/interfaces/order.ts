import { Ingredients } from "./Ingredients";
import { TContactData } from "./contactData"

export interface IGetOrder<T> {
    [key: string]: T
};

export type TOrder = {
    id: string,
    contactData: TContactData,
    price: number,
    ingredients: Ingredients
};