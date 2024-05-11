import React from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

export const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/" end>
                Burger Builder
            </NavigationItem>
            <NavigationItem to="/orders" end>
                Orders
            </NavigationItem>
        </ul>
    );
};