import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BarLoading from "../../components/loading/BarLoading";
import { postAction } from "../../redux/post.slice";
import { postActionSelector } from "../../selector/selector";
import PostItem from "../posts/PostItem";

const DetailForAll = () => {
    const { blogId } = useParams();
    const blogActions = useSelector(postActionSelector);
    const [blog, setBlog] = useState([]);
    console.log("🚀 ~ file: DetailForAll.jsx:12 ~ DetailForAll ~ blog:", blog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAction.getPostActiveAllByUser());
    }, [dispatch]);

    useEffect(() => {
        if (blogId) {
            const filter = blogActions?.data?.filter(
                (item) => item.id == blogId,
            );
            setBlog(filter);
        }
    }, [blogActions, blogId]);

    if (blogActions.loading && blog === undefined) return <BarLoading />;

    return (
        <>
            <div className="container my-10">
                {blog?.map((item) => (
                    <PostItem data={item} key={item.id} />
                ))}
            </div>
        </>
    );
};

export default DetailForAll;
