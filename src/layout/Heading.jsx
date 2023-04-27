import React from "react";

const Heading = ({ className = "", titile }) => {
    return (
        <span
            className={`${className} text-2xl relative font-semibold border-t-2 border-purple  `}
        >
            {titile}
        </span>
    );
};

export default Heading;
