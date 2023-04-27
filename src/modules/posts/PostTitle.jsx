import React from "react";
import { Link } from "react-router-dom";

const PostTitle = ({ content, title = "", className = "", to = "" }) => {
    return (
        <div
            className={`${className} font-semibold tracking-[0.25px] leading-4`}
        >
            <Link to={`${to}`} className="text-lg font-semibold">
                {title}
            </Link>
            <p className="text-sm text-gray-400">{content}</p>
        </div>
    );
};

export default PostTitle;
