import React from "react";
import slugify from "slugify";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItem = ({ data }) => {
    return (
        <div className="flex flex-col items-start">
            <PostImage
                url={`http://localhost:3333/uploads/${data.image}`}
                className="block w-full h-full mb-8"
            />
            <PostCategory
                to={`${data.category.name}`}
                className="mb-3"
                category={data.category.name}
            />
            <PostTitle
                title={data.title}
                content={data.content}
                to={`blog/${slugify(data.content, {
                    lower: true,
                })}/${data.id}`}
                className="flex flex-col gap-5 mb-8"
            />
            <PostMeta
                authorName={data?.user?.email || "minh hieu"}
                date={data.created_at}
            />
        </div>
    );
};

export default PostItem;
