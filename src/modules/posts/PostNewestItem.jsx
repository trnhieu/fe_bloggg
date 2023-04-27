import React from "react";
import slugify from "slugify";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestItem = ({ data }) => {
    return (
        <div className="flex items-center gap-5 pb-5 border-b-2 border-solid border-silver ">
            <PostImage
                url={`http://localhost:3333/uploads/${data.image}`}
                className="flex-shrink-0 block h-32 rounded-lg w-44"
            />

            <div className="flex-1 ">
                <PostCategory
                    className="mb-3"
                    category={data.category.name}
                    to={data.category.name}
                />
                <PostTitle
                    title={data.title}
                    className="mb-8 "
                    to={`blog/${slugify(data.title)}/${data.id}`}
                />
                <PostMeta authorName={data.user.email} date={data.created_at} />
            </div>
        </div>
    );
};

export default PostNewestItem;
