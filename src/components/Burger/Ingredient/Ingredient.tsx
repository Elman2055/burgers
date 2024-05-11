import React from 'react';
import './Ingredient.css';

interface Props {
    type: "salad" | "meat" | "bacon" | "cheese" | "bread-top" | "bread-bottom"
}

const Ingredient = ({type}: Props) => {
    switch (type) {
        case "bread-top":
            return (
                <div className="BreadTop">
                    <div className='Seeds1'/>
                    <div className='Seeds2'/>
                </div>
            )    
        case "bread-bottom":
            return <div className="BreadBottom"/>
        case "bacon":
            return <div className="Bacon"/>
        case "cheese":
            return <div className="Cheese"/>
        case "meat":
            return <div className="Meat"/>
        case "salad":
            return <div className="Salad"/>
        default:
            return null;
    }
}

export default Ingredient;
