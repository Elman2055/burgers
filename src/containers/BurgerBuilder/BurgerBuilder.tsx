import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import type { Ingredients, IngredientNames } from '@/interfaces/Ingredients'; 
import Burger from '@/components/Burger/Burger';
import BuildControls from '@/components/BuildControls/BuildControls';
import { IngredientPrices } from '@/helpers/IngPrice';
import { Modal } from '@/components/UI/Modal/Modal';
import { OrderSummary } from '@/components/Burger/OrderSummary';

const BurgerBuilder = () => {
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState<number>(IngredientPrices.bread);
    const [purshasable, setPurshasable] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [ingredients, setIngredients] = useState<Ingredients>({
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    });

    const onLessClick = (ingType: IngredientNames) => {
        const ingredientsCopy = {...ingredients};
        if(ingredientsCopy[ingType] > 0) {
            ingredientsCopy[ingType] -= 1;
            setIngredients(ingredientsCopy);
            setTotalPrice(prevState => prevState - IngredientPrices[ingType]);
            updatePurshasable(ingredientsCopy);
        };
    };

    const onMoreClick = (ingType: IngredientNames) => {
        const ingredientsCopy = {...ingredients};
        ingredientsCopy[ingType] += 1;
        setTotalPrice(prevState => prevState + IngredientPrices[ingType]);
        setIngredients(ingredientsCopy);
        updatePurshasable(ingredientsCopy);
    };

    const updatePurshasable = (ings: Ingredients) => {
        const sum = Object.keys(ings) // [salad, meat, bacon, cheese]
                        .map(ing => ings[ing as IngredientNames]) // [0, 0, 0 ,0]
                        .reduce((a, b) => a + b, 0); // 0
        setPurshasable(sum > 0);
    };

    const onOpenModalHandler = () => {
        setShow(true);
    };

    const onClosedHandler = () => {
        setShow(false);
    };

    const onPurchaseContinued = () => {
        const searchParams = createSearchParams(ingredients as unknown as URLSearchParams)
        navigate({
            pathname: "/checkout",
            search: `${searchParams.toString()}`
        })
    };

    return (
        <>
            <Modal show={show} onClosed={onClosedHandler}>
                <OrderSummary 
                    ingredients={ingredients} 
                    price={totalPrice}
                    purchaseCancelled={onClosedHandler}
                    purchaseContinued={onPurchaseContinued}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls 
                purshasable={purshasable}
                price={totalPrice}
                onLessClick={onLessClick} 
                onMoreClick={onMoreClick}
                onOpenModal={onOpenModalHandler}
                ingredients={ingredients}
            />
        </>
    )
}

export default BurgerBuilder;
