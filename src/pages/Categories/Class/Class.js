import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Class = () => {
    const classes = useLoaderData();
    const { video, course, name, duration } = classes[0];

    return (
        <div>
            <figure>
                <iframe src={video}
                    title={name}
                    className='w-full h-[500px]'
                    allowfullscreen="allowfullscreen"
                    mozallowFullscreen="mozallowFullscreen">

                </iframe>
            </figure>
            <div className="card-body p-3 font-bold text-white text-2xl">
                <h2>Title: {name}</h2>
                <h2>Course: {course}</h2>
                <h2>Duration:{duration} minutes</h2>
                <div className="card-actions mt-5">
                    <Link to={`/checkout`} className="btn btn-outline btn-accent">Get Premium</Link>
                    <Link to={`/courses`} className="btn btn-outline btn-accent">Back to Courses</Link>
                </div>

            </div>
        </div>
    );
};

export default Class;