import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const DashboardHeader = () => {
    return (
        <div className="bg-white p-8 border border-[#eee] border-solid">
            <div className="flex items-center justify-end gap-5">
                <Button to="/manage/add-post" height="52px">
                    Write new post
                </Button>
                <Link to={"/profile"} className="w-14 h-14">
                    <img
                        className="object-cover w-full h-full rounded-full"
                        src={`https://source.unsplash.com/random`}
                        alt={``}
                    />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHeader;
