import {createRoot} from "react-dom/client";
import {App} from "./components/App/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const root = document.getElementById('root')

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

        ]
    },
]);

container.render(
    <RouterProvider router={router} />
)