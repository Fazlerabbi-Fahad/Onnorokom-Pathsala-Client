import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Classes from '../Classes/Classes';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()
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