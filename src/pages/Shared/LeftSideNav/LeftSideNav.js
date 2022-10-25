import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourse] = useState([]);
    console.log(courses);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            {
                courses.map(course =>
                    <p><Link to={`/courses/${course._id}`}>{course.course}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;