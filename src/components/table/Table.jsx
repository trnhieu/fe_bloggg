import React from "react";

const Table = ({ children, className }) => {
    return (
        <div className={`${className} overflow-auto bg-white rounded-lg`}>
            <table className="w-full">{children}</table>
        </div>
    );
};

export default Table;
