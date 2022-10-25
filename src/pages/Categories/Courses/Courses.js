import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="grid grid-cols-2">
            <div>
                {
                    courses.map(course =>
                        <p><Link>{course.course}</Link></p>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Courses;