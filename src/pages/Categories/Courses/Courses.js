import { Link, useLoaderData } from 'react-router-dom';
import Classes from '../Classes/Classes';
import './Courses.css';
import img3 from '../../../Images/img3.jpg';


const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div>
            <div className="hero min-h-screen mb-5" style={{ backgroundImage: `url(${img3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Classes is here. Ready to learn.</h1>
                        <button className="btn btn-active btn-ghost"><Link to='/courses/checkout'>Get Premium</Link></button>
                        <p className="mb-5 text-xl">Total Classes : <span className='font-bold'>{courses.length}</span></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-10'>
                {
                    courses.map(course => <Classes
                        key={course._id}
                        course={course}
                    ></Classes>)
                }

            </div>
        </div>
    );
};

export default Courses;