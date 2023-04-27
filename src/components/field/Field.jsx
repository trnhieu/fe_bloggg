import PropTypes from "prop-types";
import React from "react";

const Field = ({ children, className }) => {
    return (
        <div className={`flex flex-col gap-5 mb-5 ${className}`}>
            {children}
        </div>
    );
};

Field.propTypes = {
    className: PropTypes.string,
};

export default Field;
