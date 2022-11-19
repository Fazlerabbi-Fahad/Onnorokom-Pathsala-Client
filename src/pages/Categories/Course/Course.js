import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Classes from '../Classes/Classes';

const Course = () => {
    const [course, setCourse] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/course/')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-3 gap-4 mr-10'>
                {
                    course.map(classes => <Classes
                        key={classes._id}
                        classes={classes}
                    ></Classes>)
                }

            </div>
        </div>
    );
};

export default Course;