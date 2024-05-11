import React from 'react';
import type { IngredientNames } from '@/interfaces/Ingredients';
import './BuildControl.css';

interface Props {
    type: IngredientNames;
    onMoreClick: VoidFunction;
    onLessClick: VoidFunction;
}

const BuildControl = ({type, onMoreClick, onLessClick}: Props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{type}</div>
            <button className='Less' onClick={onLessClick}>Less</button>
            <button className='More' onClick={onMoreClick}>More</button>
        </div>
    );
}

export default BuildControl;
