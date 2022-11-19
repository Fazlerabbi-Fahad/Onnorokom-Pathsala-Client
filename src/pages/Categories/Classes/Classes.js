import React from 'react';


const Classes = ({ course }) => {
    const { video, name, duration } = course;
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
                    <div className="card-actions justify-end absolute bottom-0 right-0 mb-5 mr-5">
                        <div className="badge badge-outline">{duration} minutes</div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Classes;