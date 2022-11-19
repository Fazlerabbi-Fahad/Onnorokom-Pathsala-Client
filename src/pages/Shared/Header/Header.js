import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start flex justify-between lg:justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="justify-start menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <Link className="btn btn-outline btn-accent" to='/register'>Log in</Link>
                        </ul>
                    </div>
                    <div className='justify-end'>
                        <Link className="btn btn-ghost normal-case absolute top-2" style={{ hight: '10px', width: '150px', top: '-50' }} to='/'><img alt='' src={logo} /></Link>

                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <Link className="btn btn-outline btn-accent" to='/register'>Log in</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;