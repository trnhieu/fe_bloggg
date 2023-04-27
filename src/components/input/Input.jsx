import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({
    children,
    name = "",
    control,
    type = "text",
    placeholder = "",
    ...props
}) => {
    const hasIcon = children ? true : false;

    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });

    return (
        <div className="relative w-full">
            <input
                type={type}
                id={name}
                className={`w-full font-medium transition-all border border-gray-300 rounded-lg ${
                    hasIcon ? "p-[20px_60px_20px_20px]" : "p-5"
                }`}
                placeholder={placeholder}
                {...field}
                {...props}
            />
            {children ? (
                <div className="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer">
                    {children}
                </div>
            ) : null}
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
