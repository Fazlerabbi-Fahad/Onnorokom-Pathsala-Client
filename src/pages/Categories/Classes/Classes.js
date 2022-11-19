import React from 'react';

const Classes = ({ classes }) => {
    return (
        <div>
            <div className="card glass" style={{ height: '350px', width: '300px' }}>
                <figure>
                    <iframe src={classes.video} className='w-full h-50' allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"></iframe>
                </figure>
                <div className="card-body p-3">
                    <h2>{classes.name}</h2>
                    <div className="card-actions justify-end absolute bottom-0 right-0 mb-5 mr-5">
                        <div className="badge badge-outline">{classes.duration} minutes</div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Classes;