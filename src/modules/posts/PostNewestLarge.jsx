import React from "react";
import slugify from "slugify";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestLarge = ({ data }) => {
    return (
        <div>
            <PostImage
                url={`http://localhost:3333/uploads/${data.image}`}
                className="block mb-5 h-[433px] rounded-lg "
            />
            <div className="flex-1">
                <PostCategory
                    className="mb-3"
                    category={data.category.name}
                    to={data.category.name}
                />
                <PostTitle
                    title={data.title}
                    className="mb-8"
                    to={`blog/${slugify(data.title)}/${data.id}`}
                />
                <PostMeta authorName={data.user.email} date={data.created_at} />
            </div>
        </div>
    );
};

export default PostNewestLarge;
