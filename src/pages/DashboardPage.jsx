import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionActive from "../components/action/ActionActive";
import ActionDenie from "../components/action/ActionDenie";
import BarLoading from "../components/loading/BarLoading";
import Table from "../components/table/Table";
import DashboardHeading from "../modules/dashboard/DashboardHeading";
import { postAction } from "../redux/post.slice";
import { postPendingSelector, userTokenSelector } from "../selector/selector";

const DashboardPage = () => {
    const postPending = useSelector(postPendingSelector);
    const tokenUser = useSelector(userTokenSelector);
    console.log(
        "🚀 ~ file: DashboardPage.jsx:17 ~ DashboardPage ~ postPeding:",
        postPending,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            postAction.getPostPendingAll({ token: tokenUser.token.token }),
        );
    }, [dispatch, tokenUser]);

    const handleActive = ({ id, status, token }) => {
        dispatch(postAction.upToActiveAndDownToDraft({ id, status, token }));
    };

    const handleDeActive = ({ id, status, token }) => {
        dispatch(postAction.upToActiveAndDownToDraft({ id, status, token }));
    };

    if (!postPending || !postPending.data || postPending.data.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <BarLoading />
                <div>Bạn không có quyền</div>
            </div>
        );
    }

    if (postPending.status === 200)
        return (
            <div>
                <DashboardHeading title="Dashboard" desc="Manage Post">
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
                            <th>email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {postPending?.data?.map((post) => {
                        return (
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
                                    <td>{post?.user?.email}</td>
                                    <td>{post.status}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <ActionDenie
                                                onClick={() =>
                                                    handleDeActive({
                                                        id: post.id,
                                                        status: 4,
                                                        token: tokenUser.token
                                                            .token,
                                                    })
                                                }
                                            />
                                            <ActionActive
                                                onClick={() =>
                                                    handleActive({
                                                        id: post.id,
                                                        status: 3,
                                                        token: tokenUser.token
                                                            .token,
                                                    })
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
            </div>
        );
};

export default DashboardPage;
