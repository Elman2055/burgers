import React from "react";
import { Ingredients, IngredientNames } from "@/interfaces/Ingredients";
import "./OrderItem.css";

type TProps = {
    ingredients: Ingredients,
    price: number
};

export const OrderItem = ({ingredients, price}: TProps) => {
    const ings = Object.keys(ingredients).map(igName => {
        return {
          name: igName,
          amount: ingredients[igName as IngredientNames]
        };
    });

    const ingredientOutput = ings.map(ig => (
        <span key={ig.name}>{ig.name} ({ig.amount})</span>
    ));
    
    return (
        <div className="OrderItem">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{price} KZT</strong></p>
        </div>
    );
};