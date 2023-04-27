import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userActions } from "../../redux/user.slice";

const sidebarLinks = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
            </svg>
        ),
    },
    {
        title: "Post",
        url: "/manage/posts",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            </svg>
        ),
    },
    // {
    //     title: "Category",
    //     url: "/manage/category",
    //     icon: (
    //         <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //         >
    //             <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    //             />
    //         </svg>
    //     ),
    // },
    {
        title: "User",
        url: "/manage/user",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
    {
        title: "Logout",
        url: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
            </svg>
        ),
        onClick: () => {},
    },
];

const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userActions.logOut());
    };
    return (
        <div className="w-[300px] shadow-lg bg-white rounded-lg">
            {sidebarLinks.map((link) => {
                if (link.onClick)
                    return (
                        <NavLink
                            key={link.title}
                            onClick={handleLogout}
                            to={link.url}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "14px 20px",
                                gap: "20px",
                                fontWeight: 500,
                                cursor: "pointer",
                                marginBottom: "20px",
                            }}
                        >
                            <span className="menu-icon">{link.icon}</span>
                            <span className="menu-text">{link.title}</span>
                        </NavLink>
                    );
                return (
                    <NavLink
                        key={link.title}
                        to={link.url}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "14px 20px",
                            gap: "20px",
                            fontWeight: 500,
                            cursor: "pointer",
                            marginBottom: "20px",
                        }}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-pink-500 text-white"
                                : "bg-white text-black"
                        }
                    >
                        <span className="menu-icon">{link.icon}</span>
                        <span className="menu-text">{link.title}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Sidebar;
