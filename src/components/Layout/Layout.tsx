import React from "react";
import { Outlet } from "react-router-dom";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";
import "./Layout.css";

export const Layout = () => {
    return (
        <>
            <ToolBar/>
            <main className="Layout-Content">
                <Outlet/>
            </main>
        </>
    );
};