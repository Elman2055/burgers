import type { Ingredients } from "@/interfaces/Ingredients";

export const parseContactData = (location: any): Ingredients | null => {
    return location.state.ingredients || null;
};