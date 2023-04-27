import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionDownRole from "../../components/action/ActionDownRole";
import ActionUpRole from "../../components/action/ActionUpRole";
import BarLoading from "../../components/loading/BarLoading";
import Table from "../../components/table/Table";
import { userActions } from "../../redux/user.slice";
import { userAllSelector, userTokenSelector } from "../../selector/selector";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserManage = () => {
    const users = useSelector(userAllSelector);
    const tokenUser = useSelector(userTokenSelector);

    console.log("🚀 ~ file: UserManage.jsx:10 ~ UserManage ~ users:", users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            userActions.getAllUsers({
                token: tokenUser.token.token,
            }),
        );
    }, [dispatch, tokenUser]);

    const handleUpTo = ({ id, level, token }) => {
        dispatch(userActions.upToLevel({ id, level, token }));
    };

    const handleDownTo = ({ id, level, token }) => {
        dispatch(userActions.upToLevel({ id, level, token }));
    };

    if (!users || !users.data || users.data.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <BarLoading />
                <div>Bạn không có quyền</div>
            </div>
        );
    }

    if (users.status === 200)
        return (
            <div>
                <DashboardHeading title="User manager" desc="Manage your User">
                    <div className="w-auto px-5 py-3 border border-gray-500 rounded-lg">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search User id..."
                        />
                    </div>
                </DashboardHeading>
                <Table className="overflow-x-auto bg-white rounded-lg">
                    <thead className="bg-[#f7f7f8]">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Blog</th>
                            <th>Role</th>
                            <th>Set Role</th>
                        </tr>
                    </thead>
                    {users?.data?.map((user) => {
                        return (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.blog?.length}</td>

                                    <td>{user.role.name}</td>

                                    <td>
                                        <div className="flex items-center gap-2">
                                            {user?.role.name === "user" && (
                                                <ActionUpRole
                                                    onClick={() =>
                                                        handleUpTo({
                                                            id: user.id,
                                                            level: "+",
                                                            token: tokenUser
                                                                .token.token,
                                                        })
                                                    }
                                                />
                                            )}
                                            {user?.role?.name === "mod" && (
                                                <ActionDownRole
                                                    onClick={() =>
                                                        handleDownTo({
                                                            id: user.id,
                                                            level: "-",
                                                            token: tokenUser
                                                                .token.token,
                                                        })
                                                    }
                                                />
                                            )}
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

export default UserManage;
