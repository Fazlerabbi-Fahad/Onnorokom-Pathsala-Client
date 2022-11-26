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
import Class from "../../pages/Categories/Class/Class";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import NotFound from "../../NotFound/NotFound";

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
            },
            {
                path: '/classes/:id',
                element: <Class></Class>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            },
        ]
    },
    {
        path: '/courses',
        element: <CourseMain></CourseMain>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://onnorokom-pathsala-server.vercel.app/course/')
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://onnorokom-pathsala-server.vercel.app/courses/${params.id}`)
            },


        ]
    },


    {
        path: "/*",
        element: <NotFound></NotFound>
    }
])