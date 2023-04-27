import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ linkName, className, to }) => {
    return (
        <>
            {to && (
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-bubble_gum rounded-md text-white "
                            : `${className}`
                    }
                    style={{
                        padding: "0 20px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {linkName}
                </NavLink>
            )}
        </>
    );
};

Link.propTypes = {
    linkName: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default Link;
