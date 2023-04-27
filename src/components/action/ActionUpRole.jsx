import React from "react";

const ActionUpRole = ({ onClick = () => {} }) => {
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
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
            </svg>
        </span>
    );
};

export default ActionUpRole;
