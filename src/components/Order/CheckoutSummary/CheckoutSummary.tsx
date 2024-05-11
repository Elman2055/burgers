import React from 'react';
import { useNavigate } from 'react-router-dom';
import Burger from "@/components/Burger/Burger";
import {Button} from "@/components/UI/Button/Button";
import type {Ingredients} from "@/interfaces/Ingredients";
import './CheckoutSummary.css';

interface TProps {
  ingredients: Ingredients;
  checkoutCancelled: VoidFunction
  checkoutContinued: VoidFunction
}

export const CheckoutSummary = (props: TProps) => {
  const navigate = useNavigate();

  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" click={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" click={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}