import Admin from "../Layout/Admin";
import Other from "../Layout/Other";
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
                element: <AdminHome />
            }
        ]
    },
    {
        path: '/other',
        element: <Other />,
        children: [
            {
                path: '/other/upload',
                element: <UploadForm />

            }
        ]
    }
])