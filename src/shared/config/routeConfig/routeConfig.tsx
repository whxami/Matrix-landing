import React from "react";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import MainPage from "@pages/mainPage/mainPage";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            path:"main",
            element:<MainPage/>,
        }],
    },
];
