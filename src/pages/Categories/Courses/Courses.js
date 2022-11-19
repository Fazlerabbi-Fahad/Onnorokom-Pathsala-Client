import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Classes from '../Classes/Classes';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/courses/')
            .then(res => res.json())
            .then(data => setCourses())
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4 mr-10'>
            {
                courses.map(course => <Classes
                    key={course._id}
                    course={course}
                ></Classes>)
            }

        </div>
    );
};

export default Courses;