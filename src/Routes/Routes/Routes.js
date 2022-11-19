import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Categories/Home/Home";
import Courses from "../../pages/Categories/Courses/Courses";
import About from "../../pages/Categories/About/About";
import Blog from "../../pages/Categories/Blog/Blog";
import CourseMain from "../../Layout/CourseMain/CourseMain";
import Course from "../../pages/Categories/Course/Course";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";

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
        element: <CourseMain></CourseMain>,
        children: [
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses/'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <Course></Course>

            }
        ]
    }
])