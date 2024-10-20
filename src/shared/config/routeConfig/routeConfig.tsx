import React from "react";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import MainPage from "@pages/mainPage/mainPage";
import NotFoundPage from "@pages/notFound/notFound";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "main",
                element: <MainPage />,
            },
        ],

    },
    {
        path: "*",  // Обработка всех неизвестных путей
        element: <NotFoundPage />,  // Компонент страницы 404
    }
];
