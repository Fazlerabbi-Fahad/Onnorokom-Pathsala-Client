import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';

const CourseMain = () => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])


    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="onnorokomDrawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <label htmlFor="onnorokomDrawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="onnorokomDrawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li>{
                                courses.map(course =>
                                    <p><Link to={`/courses/${course._id}`}>{course.course}</Link></p>)
                            }</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default CourseMain;