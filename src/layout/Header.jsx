import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { linkCategory } from "../assets/data/LinkCategory";
import Link from "../components/banner_meta/Link";
import Button from "../components/button/Button";
import DarkMode from "../components/toggle_switches/DarkMode";
import useDarkMode from "../hook/useDarkMode";
import { darkModeAction } from "../redux/darkmode.slice";
import { darkModSeletor } from "../selector/selector";

const Header = () => {
    const dispatch = useDispatch();
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = useSelector(darkModSeletor);

    useEffect(() => {
        dispatch(darkModeAction.toggledarkMode(darkMode));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleTheme = () => {
        setDarkMode(!darkMode);
        dispatch(darkModeAction.toggledarkMode(!darkMode));
    };
    return (
        <>
            <header className="sticky  inset-0 z-[99] flex items-center justify-around h-20 shadow-lg">
                <h1 className="font-semibold">Logo</h1>
                <nav className="">
                    <ul className="flex gap-3 capitalize">
                        {linkCategory.map((item) => (
                            <Link
                                key={item.id}
                                to={item.linkUrl}
                                linkName={item.name}
                                className="transition-colors rounded-md cursor-pointer hover:bg-gray-100 h-[40px] px-5 flex items-center justify-center"
                            />
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-1 ">
                    <Button
                        to="login"
                        className="h-[50px] px-5 hover:bg-bubble_gum rounded-md hover:text-white transition-colors capitalize"
                    >
                        login
                    </Button>
                    <Button
                        to="register"
                        className="h-[50px] px-5 hover:bg-bubble_gum rounded-md hover:text-white transition-colors capitalize"
                    >
                        signup
                    </Button>

                    <Button>
                        <DarkMode
                            onChange={handleToggleTheme}
                            theme={toggleDarkMode}
                        />
                    </Button>

                    <Button
                        to="dashboard"
                        className="h-[50px] px-5 hover:bg-bubble_gum rounded-md hover:text-white transition-colors capitalize"
                    >
                        Create Blog
                    </Button>
                </div>
            </header>
        </>
    );
};

export default Header;
