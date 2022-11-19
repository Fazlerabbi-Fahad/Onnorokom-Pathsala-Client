import React from 'react';
import './About.css';
import img2 from "../../../Images/img2.jpg";

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 py-20">
            <figure><img className='w-1/2' src={img2} alt="Album" /></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-3xl font-bold">Onnorokom Pathshala</h2>
                <p className='font-bold mt-5'>Onnorokom Pathshala is an online school providing free education through social media like YouTube and Facebook</p>
                <p className='mt-5'>Onnorokom Pathshala provides quality education for free through social media. There are many students that can’t afford quality education in the rural areas or suburbs in Bangladesh. Through YouTube and Facebook, Onnorokom Pathshala makes education accessible to them.</p>
            </div>
        </div>
    );
};

export default About;