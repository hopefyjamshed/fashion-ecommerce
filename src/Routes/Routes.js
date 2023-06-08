import Admin from "../Layout/Admin";
import AdminHome from "../pages/AdminLayout/AdminHome";
import UploadForm from "../pages/AdminLayout/UploadForm";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '/admin',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/admin/upload',
                element: <UploadForm></UploadForm>
            }
        ]
    }
])