import PropTypes from "prop-types";
import React from "react";

const Meta = ({ name, title, desc, className }) => {
    return (
        <>
            <div
                className={`flex flex-col items-center justify-center max-w-xl gap-5 ${className}`}
            >
                <h1 className="text-sm font-semibold">{name}</h1>
                <h1 className="text-4xl font-semibold capitalize">{title}</h1>
                <p className="text-gray-300 font-sm">{desc}</p>
            </div>
        </>
    );
};

Meta.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Meta;
