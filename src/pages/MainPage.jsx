import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import { darkModSeletor } from "../selector/selector";

const MainPage = () => {
    const toggleDarkMode = useSelector(darkModSeletor);

    return (
        <div
            className={`${
                toggleDarkMode
                    ? "dark:bg-black dark:text-white"
                    : "dark:bg-white dark:text-black"
            }`}
        >
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default MainPage;
