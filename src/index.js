import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Category from "./modules/category/Category";
import CategoryAddNew from "./modules/category/CategoryAddNew";
import CategoryManage from "./modules/category/CategoryManage";
import CategoryUpdate from "./modules/category/CategoryUpdate";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import Detail from "./modules/detail/Detail";
import PostAddNew from "./modules/posts/PostAddNew";
import PostEdit from "./modules/posts/PostEdit";
import PostManager from "./modules/posts/PostManager";
import UserManage from "./modules/user/UserManage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import reportWebVitals from "./reportWebVitals";
import { storePost } from "./store/postStore";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DetailForAll from "./modules/detail/DetailForAll";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
        element: <MainPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                children: [
                    {
                        path: ":categoryName",
                        element: <Category />,
                    },
                ],
            },

            {
                path: "/blog/:blogId",
                element: <Detail />,
            },

            {
                path: "/blog/:title/:blogId",
                element: <DetailForAll />,
            },
        ],
    },

    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    {
        path: "*",
        element: <NotFoundPage />,
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/manage/add-post",
                element: <PostAddNew />,
            },
            {
                path: "/manage/posts",
                element: <PostManager />,
            },
            {
                path: "/manage/posts/edit/:postId",
                element: <PostEdit />,
            },
            {
                path: "/manage/add-category",
                element: <CategoryAddNew />,
            },
            {
                path: "/manage/category",
                element: <CategoryManage />,
            },
            {
                path: "/manage/update-category",
                element: <CategoryUpdate />,
            },
            {
                path: "/manage/user",
                element: <UserManage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={storePost}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
        />
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
