import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            {
                courses.map(course => <p>{course.name}</p>)
            }

        </div>
    );
};

export default Courses;