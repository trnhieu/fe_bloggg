import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import ActionDenie from "../../components/action/ActionDenie";
import ActionEdit from "../../components/action/ActionEdit";
import ActionPeding from "../../components/action/ActionPeding";
import ActionView from "../../components/action/ActionView";
import Table from "../../components/table/Table";
import { userRole } from "../../configs/constand";
import { postAction } from "../../redux/post.slice";
import { postDraftSelector, userTokenSelector } from "../../selector/selector";
import DashboardHeading from "../dashboard/DashboardHeading";
const PostManager = () => {
    const postDraftMessage = useSelector(postDraftSelector);
    const tokenUser = useSelector(userTokenSelector);
    const postDraft = postDraftMessage.data;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAction.getPostDraftAll({ token: tokenUser.token.token }));
    }, [dispatch, tokenUser]);

    const handleDeleteDraft = ({ id, token }) => {
        dispatch(postAction.deletePostDraft({ id, token }));
    };
    const handleDraftToPending = ({ id, token }) => {
        dispatch(postAction.draftToPending({ id, token }));
    };

    if (postDraftMessage.status === 404)
        return (
            <div>
                <DashboardHeading title="Post manager" desc="Manage your Post">
                    <div className="w-auto px-5 py-3 border border-gray-500 rounded-lg">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search post id..."
                        />
                    </div>
                </DashboardHeading>
                <Table className="overflow-x-auto bg-white rounded-lg">
                    <thead className="bg-[#f7f7f8]">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        );

    if (postDraftMessage.status === 200) {
        return (
            <div>
                <DashboardHeading title="Post manager" desc="Manage your Post">
                    <div className="w-auto px-5 py-3 border border-gray-500 rounded-lg">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search post id..."
                        />
                    </div>
                </DashboardHeading>
                <Table className="overflow-x-auto bg-white rounded-lg">
                    <thead className="bg-[#f7f7f8]">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {postDraft.map((post, index) => (
                        <tbody key={post.id}>
                            <tr>
                                <td>{post.id}</td>
                                <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                                    {post.title}
                                </td>
                                <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                                    {post.content}
                                </td>
                                <td>{post.category?.name}</td>
                                <td>{post.status}</td>
                                <td>
                                    <div>
                                        {post.status === "deactive" &&
                                            post?.user?.role_id ===
                                                userRole.USER && (
                                                <div className="flex items-center gap-2">
                                                    <ActionView
                                                        to={`/blog/${slugify(
                                                            post.title,
                                                            { lower: true },
                                                        )}/${post.id}`}
                                                    />
                                                    <ActionEdit
                                                        to={`/manage/posts/edit/${post.id}`}
                                                    />
                                                </div>
                                            )}
                                        {post.status === "draft" &&
                                            post?.user?.role_id ===
                                                userRole.USER && (
                                                <div className="flex items-center gap-2">
                                                    <ActionDenie
                                                        onClick={() =>
                                                            handleDeleteDraft({
                                                                id: post.id,
                                                                token: tokenUser
                                                                    .token
                                                                    .token,
                                                            })
                                                        }
                                                    />
                                                    <ActionView
                                                        to={`/blog/${post.id}`}
                                                    />
                                                    <ActionEdit
                                                        to={`/manage/posts/edit/${post.id}`}
                                                    />
                                                    <ActionPeding
                                                        onClick={() =>
                                                            handleDraftToPending(
                                                                {
                                                                    id: post.id,
                                                                    token: tokenUser
                                                                        .token
                                                                        .token,
                                                                },
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                        {post.status === "draft" &&
                                            post?.user?.role_id ===
                                                userRole.MOD && (
                                                <div className="flex items-center gap-2">
                                                    <ActionView
                                                        to={`/blog/${slugify(
                                                            post.title,
                                                            { lower: true },
                                                        )}/${post.id}`}
                                                    />
                                                    <ActionEdit
                                                        to={`/manage/posts/edit/${post.id}`}
                                                    />
                                                    <ActionDenie
                                                        onClick={() =>
                                                            handleDeleteDraft({
                                                                id: post.id,
                                                                token: tokenUser
                                                                    .token
                                                                    .token,
                                                            })
                                                        }
                                                    />
                                                    <ActionPeding
                                                        onClick={() =>
                                                            handleDraftToPending(
                                                                {
                                                                    id: post.id,
                                                                    token: tokenUser
                                                                        .token
                                                                        .token,
                                                                },
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                        {post.status === "draft" &&
                                            post?.user?.role_id ===
                                                userRole.ADMIN && (
                                                <div className="flex items-center gap-2">
                                                    <ActionView
                                                        to={`/blog/${post.id}`}
                                                    />
                                                    <ActionEdit
                                                        to={`/manage/posts/edit/${post.id}`}
                                                    />
                                                    <ActionDenie
                                                        onClick={() =>
                                                            handleDeleteDraft({
                                                                id: post.id,
                                                                token: tokenUser
                                                                    .token
                                                                    .token,
                                                            })
                                                        }
                                                    />
                                                    <ActionPeding
                                                        onClick={() =>
                                                            handleDraftToPending(
                                                                {
                                                                    id: post.id,
                                                                    token: tokenUser
                                                                        .token
                                                                        .token,
                                                                },
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        );
    }
};

export default PostManager;
