import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Categories/Home/Home";
import Courses from "../../pages/Categories/Courses/Courses";
import About from "../../pages/Categories/About/About";
import Blog from "../../pages/Categories/Blog/Blog";
import CourseMain from "../../Layout/CourseMain/CourseMain";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Course from "../../pages/Categories/Course/Course";
import CheckOut from "../../pages/Categories/CheckOut/CheckOut";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/courses',
        element: <PrivateRoutes><CourseMain></CourseMain></PrivateRoutes>,
        children: [
            {
                path: '/courses',
                element: <PrivateRoutes><Courses></Courses></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/course/')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoutes><Course></Course></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/courses/checkout',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            }
        ]
    }
])