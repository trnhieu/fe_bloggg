import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BarLoading from "../components/loading/BarLoading";
import Category from "../modules/category/Category";
import HomeBanner from "../modules/home/HomeBanner";
import HomeFeature from "../modules/home/HomeFeature";
import HomeNewest from "../modules/home/HomeNewest";
import PostRelated from "../modules/posts/PostRelated";
import { postAction } from "../redux/post.slice";
import { postActionSelector } from "../selector/selector";

const HomePage = () => {
    const postActions = useSelector(postActionSelector);

    const { categoryName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAction.getPostActiveAllByUser());
    }, [dispatch]);

    if (postActions.loading) return <BarLoading />;

    return (
        <>
            <HomeBanner />
            {categoryName === undefined ? (
                <>
                    <HomeFeature item={postActions.data} />
                    <HomeNewest item={postActions.data} />
                    <PostRelated item={postActions.data} />
                </>
            ) : (
                <Category />
            )}
        </>
    );
};

export default HomePage;
