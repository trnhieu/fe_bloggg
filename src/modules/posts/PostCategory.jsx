import React from "react";
import { Link } from "react-router-dom";

const PostCategory = ({ category, to = "", className = "" }) => {
    return (
        <div
            className={`${className} inline-block py-1 px-3 rounded-xl text-white text-sm font-semibold whitespace-nowrap cursor-pointer bg-black`}
        >
            <Link to={`${to}`}>{category}</Link>
        </div>
    );
};

export default PostCategory;
