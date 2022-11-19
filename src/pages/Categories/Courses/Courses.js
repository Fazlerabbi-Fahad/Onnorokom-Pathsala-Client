import React, { useEffect, useState } from 'react';
import Classes from '../Classes/Classes';
import './Courses.css';

const Courses = () => {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-10'>
            {
                courses.map(classes => <Classes
                    key={classes._id}
                    classes={classes}
                ></Classes>)
            }

        </div>
    );
};

export default Courses;