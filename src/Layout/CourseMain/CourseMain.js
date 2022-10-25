import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../pages/Shared/LeftSideNav/LeftSideNav';

const CourseMain = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;