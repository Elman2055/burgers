import React, { ReactNode } from 'react';
import type { IngredientNames, Ingredients } from '@/interfaces/Ingredients';
import Ingredient from './Ingredient/Ingredient';
import './Burger.css';

interface Props {
    ingredients: Ingredients
}

const Burger = ({ingredients}: Props) => {
    const ingredientsKey = Object.keys(ingredients);

    const ingList: ReactNode[] = [];

    ingredientsKey.forEach(ingKey => {
        let amount = ingredients[ingKey as IngredientNames];

        for(let i = 0; i < amount; i++) {
            ingList.push(<Ingredient key={ingKey + i} type={ingKey as IngredientNames}/>)
        }
    })

    return (
        <div className="Burger">
            <Ingredient type={"bread-top"}/>
            {ingList.length > 0 ? ingList : <p>Добавьте ингредиенты</p>}
            <Ingredient type={"bread-bottom"}/>
        </div>
    );
}

export default Burger;
