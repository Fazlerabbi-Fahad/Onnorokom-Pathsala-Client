import React from 'react';
import { Link } from 'react-router-dom';


const Classes = ({ course }) => {
    const { video, name, duration, _id } = course;
    return (
        <div>
            <div className="card glass" style={{ height: '350px', width: '300px' }}>
                <figure>
                    <iframe src={video}
                        title={name}
                        className='w-full h-50'
                        allowfullscreen="allowfullscreen"
                        mozallowFullscreen="mozallowFullscreen">

                    </iframe>
                </figure>
                <div className="card-body p-3">
                    <h2>{name}</h2>
                    <h2>{duration} minutes</h2>
                    <div className="card-actions justify-end absolute bottom-0 right-0 mb-5 mr-5">
                        <Link to={`/classes/${_id}`} className="btn btn-outline btn-accent">Details</Link>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Classes;