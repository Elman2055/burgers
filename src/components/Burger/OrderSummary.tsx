import { IngredientNames, Ingredients } from "@/interfaces/Ingredients";
import React from "react";
import { Button } from "../UI/Button/Button";

type TProps = {
    price: number;
    ingredients: Ingredients;
    purchaseCancelled: VoidFunction;
    purchaseContinued: VoidFunction
};

const styleIng: React.CSSProperties = {
    textTransform: "capitalize"
};

export const OrderSummary = ({ingredients, price, purchaseCancelled, purchaseContinued}: TProps) => {
    const ingredientSummary = Object.keys(ingredients) //[salad, bacon ...]
                                .map(ing => (
                                    <li key={ing}>
                                        <span style={styleIng}>
                                            {ing}
                                        </span>: {ingredients[ing as IngredientNames]}
                                    </li>
                                ));

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price} ₸</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" click={purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" click={purchaseContinued}>CONTINUE</Button>
        </>
    );
};