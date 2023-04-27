import React, { useState } from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [filterCategory, setFilterCategory] = useState("");
    const [categoryCount, setCategoryCount] = useState("");

    return (
        <div>
            <DashboardHeading title="Categories" desc="Manage your category">
                <Button
                    className="text-white bg-bermuda"
                    height="60px"
                    to="/manage/add-category"
                >
                    Create Category
                </Button>
                <div className="w-auto px-5 py-3 border border-gray-500 rounded-lg">
                    <input
                        type="text"
                        className="w-full outline-none"
                        placeholder="Search category..."
                    />
                </div>
            </DashboardHeading>
            <Table className="overflow-x-auto bg-white rounded-lg">
                <thead className="bg-[#f7f7f8]">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
};

export default CategoryManage;
