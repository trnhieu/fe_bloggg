import PropTypes from "prop-types";
import React from "react";

const Label = ({ htmlFor, className, label }) => {
    return (
        <label htmlFor={htmlFor} className={`${className}`}>
            {label}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
};

export default Label;
