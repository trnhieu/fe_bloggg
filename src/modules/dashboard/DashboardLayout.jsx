import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import BarLoading from "../../components/loading/BarLoading";
import { userTokenSelector } from "../../selector/selector";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    const tokenUser = useSelector(userTokenSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!tokenUser) navigate("/login");
    }, [navigate, tokenUser]);

    if (!tokenUser) return <BarLoading />;
    return (
        <div className="mx-auto my-0">
            <DashboardHeader></DashboardHeader>
            <div className="dashboard-grid">
                <Sidebar />
                <div className="dashboard-children">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
