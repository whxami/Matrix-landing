import React from "react";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import MainPage from "@pages/mainPage/mainPage";
import NotFoundPage from "@pages/notFound/notFound";
import Header from "@/widgets/Header/Header";

export const routes = [
    {
        path: "/",
        element: <MainPage />,

    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
];
