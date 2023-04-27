import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postAction } from "../../redux/post.slice";
import {
    postDraftByIdSelector,
    userTokenSelector,
} from "../../selector/selector";
import PostItem from "../posts/PostItem";

const Detail = () => {
    const { blogId } = useParams();
    const draftById = useSelector(postDraftByIdSelector);
    const tokenUser = useSelector(userTokenSelector);
    console.log("🚀 ~ file: Detail.jsx:10 ~ Detail ~ draftById:", draftById);

    const dispatch = useDispatch();

    useEffect(() => {
        if (blogId) {
            dispatch(
                postAction.getDraftById({
                    id: blogId,
                    token: tokenUser.token.token,
                }),
            );
        }
    }, [blogId, dispatch, tokenUser]);

    if (draftById.status === 404) return;

    if (draftById.status === 200) {
        return (
            <div className="mt-20">
                <PostItem data={draftById.data} />
            </div>
        );
    }
};

export default Detail;
