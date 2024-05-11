import React from 'react';
import type { Ingredients, IngredientNames } from '@/interfaces/Ingredients';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

interface Props {
    ingredients: Ingredients;
    onMoreClick: (ingType: IngredientNames) => void;
    onLessClick: (ingType: IngredientNames) => void;
    onOpenModal: VoidFunction;
    price: number;
    purshasable: boolean;
}

const BuildControls = (props: Props) => {
    const {ingredients, onMoreClick, onLessClick, onOpenModal, price, purshasable} = props;

    return (
        <div className='BuildControls'>
            <p>Current Price: <strong>{price} ₸</strong></p>
            {Object.keys(ingredients).map(ingType => (
                <BuildControl 
                    key={ingType} 
                    type={ingType as IngredientNames}
                    onLessClick={() => onLessClick(ingType as IngredientNames)}
                    onMoreClick={() => onMoreClick(ingType as IngredientNames)}
                />
            ))}

            <button onClick={onOpenModal} disabled={!purshasable} className="OrderButton">ORDER NOW</button>
        </div>
    );
}

export default BuildControls;
