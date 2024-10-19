import React from "react";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";

const routesWithMenu = [{
    path:"/menu",
    element:<div></div>,
}]

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: routesWithMenu,
    },
];
