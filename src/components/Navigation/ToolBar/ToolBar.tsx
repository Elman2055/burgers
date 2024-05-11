import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import "./ToolBar.css";

export const ToolBar = () => {
    return (
        <header className="ToolBar">
            <Link to={"/"} className="Toolbar-logo">
                <Logo/>
            </Link>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};