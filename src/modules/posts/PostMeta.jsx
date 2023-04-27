import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const PostMeta = ({
    date = "Mar 23",
    authorName = "minh hieu",
    className = "",
    to = "",
}) => {
    return (
        <div
            className={`${className} flex items-center gap-3 font-semibold text-sm text-inherit`}
        >
            <span className="">{moment(date).format("MMM DD")}</span>
            <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
            <Link to={`/author/${to}`}>
                <span className="">{authorName}</span>
            </Link>
        </div>
    );
};

export default PostMeta;
