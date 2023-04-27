import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ onClick = () => "", className = "", children }) => {
    const { setShow } = useDropdown();

    const handleClick = () => {
        onClick && onClick();
        setShow(false);
    };

    return (
        <div
            className={`${className} flex items-center justify-center py-4 px-5 cursor-pointer hover:text-primary transition-all text-sm `}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default Option;
