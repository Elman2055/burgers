import React, { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

type TProps = {
    children: ReactNode;
    click?: MouseEventHandler<HTMLButtonElement>;
    btnType: 'Success' | 'Danger';
    isSubmit?: boolean
}

export const Button = ({click, btnType, children, isSubmit}: TProps) => {
    return (
        <button
            type={isSubmit ? "submit" : "button"}
            onClick={click}
            className={['Button', btnType].join(' ')}
        >
            {children}
        </button>
    )
};