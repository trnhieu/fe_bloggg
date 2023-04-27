import React from "react";

const ActionDownRole = ({ onClick = () => {} }) => {
    return (
        <span
            className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg cursor-pointer"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
            </svg>
        </span>
    );
};

export default ActionDownRole;
