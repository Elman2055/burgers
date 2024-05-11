import React, {useRef} from 'react';
import {useSearchParams, Outlet, useNavigate, NavLink} from "react-router-dom";
import type {IngredientNames, Ingredients} from '@/interfaces/Ingredients';
import { CheckoutSummary } from '@/components/Order/CheckoutSummary/CheckoutSummary';
import { parseParams } from '@/helpers/parseParams';
import { getTotalPrice } from '@/helpers/getTotalPrice';
import { IngredientPrices } from '@/helpers/IngPrice';

export const Checkout = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const ingredients = useRef(parseParams<Ingredients>(params));

  const checkoutCancelledHandler = () => {
    navigate(-1);
  };

  const checkoutContinuedHandler = () => {  
    const price = getTotalPrice(ingredients.current);
    navigate('contactData', {state: {ingredients: ingredients.current, price}});
  };

  return (
    <>
        <CheckoutSummary 
            ingredients={ingredients.current}
            checkoutCancelled={checkoutCancelledHandler}
            checkoutContinued={checkoutContinuedHandler}
        />
        <Outlet/>
    </>
);
};