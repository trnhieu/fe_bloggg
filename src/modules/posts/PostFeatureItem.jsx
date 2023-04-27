import React from "react";
import slugify from "slugify";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostFeatureItem = ({ data }) => {
    return (
        <div className="relative select-none roounded-lg w-full h-[272px]">
            <PostImage
                url={`http://localhost:3333/uploads/${data.image}`}
                className="w-full h-full "
            />
            <div className="absolute inset-0 bg-black rounded-2xl opacity-60 "></div>
            <div className="absolute inset-0 z-10 p-5 text-white">
                <div className="flex items-center justify-between mb-4">
                    <PostCategory
                        category={data.category.name}
                        to={data.category.name}
                    />
                    <PostMeta
                        authorName={data.user.email}
                        date={data.created_at}
                    />
                </div>
                <PostTitle
                    to={`blog/${slugify(data.title, { lower: true })}/${
                        data.id
                    }`}
                    title={data.title}
                />
            </div>
        </div>
    );
};

export default PostFeatureItem;
