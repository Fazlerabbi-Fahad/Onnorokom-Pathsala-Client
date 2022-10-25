import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Classes from '../Classes/Classes';

const Course = () => {
    const classes = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 mr-10'>
                {
                    classes.map(course => <Classes
                        key={course._id}
                        course={course}
                    ></Classes>)
                }

            </div>
        </div>
    );
};

export default Course;