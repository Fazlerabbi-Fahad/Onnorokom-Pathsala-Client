import './Home.css'
import About from "../../Categories/About/About";
import Login from "../../Login/Login/Login";
import img1 from '../../../Images/img1.jpg';

const Home = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">This is a online learning platform.You can learn from our website and use this videos for helping people without business purpose.</p>
                        <button className="btn btn-active btn-ghost">Let's Learn</button>
                    </div>
                </div>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Login></Login>
            </div>
        </div >
    );
};

export default Home;