import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../pages/Shared/LeftSideNav/LeftSideNav';

const CourseMain = () => {
    return (
        <div className='grid grid-cols-4'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;