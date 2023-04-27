import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import SpinLoading from "../loading/SpinLoading";

/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 */
const Button = ({
    type = "",
    onClick = () => {},
    children,
    disabled = false,
    kind = "primary",
    isLoading,
    to,
    height,
    className = "",
    ...props
}) => {
    const child = !!isLoading ? <SpinLoading></SpinLoading> : children;
    if (to !== "" && typeof to === "string") {
        return (
            <NavLink to={to} className="inline-block">
                <button
                    type={type}
                    kind={kind}
                    className={` ${className} items-center justify-center px-6 text-base rounded-lg cursor-pointer font-semibold flex disabled:opacity-50 disabled:pointer-events-none`}
                    style={{
                        height: height || "66px",
                    }}
                    {...props}
                >
                    {child}
                </button>
            </NavLink>
        );
    }
    return (
        <button
            type={type}
            kind={kind}
            className={` ${className} items-center justify-center px-6 text-base rounded-lg cursor-pointer font-semibold flex disabled:opacity-50 disabled:pointer-events-none`}
            style={{
                height: height || "66px",
            }}
            {...props}
        >
            {child}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    to: PropTypes.string,
};

export default Button;
