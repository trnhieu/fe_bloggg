import React from "react";
import { Link } from "react-router-dom";

const PostImage = ({ className = "", url = "", alt = "", to }) => {
    if (to)
        return (
            <Link to={`/${to}`} style={{ display: "block" }}>
                <div className={`${className} rounded-lg`}>
                    <img
                        src={url}
                        alt={alt}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
            </Link>
        );
    return (
        <div className={`${className} rounded-lg`}>
            <img
                src={url}
                alt={alt}
                className="object-cover w-full h-full rounded-lg"
            />
        </div>
    );
};

export default PostImage;
