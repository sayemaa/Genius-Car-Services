import React from 'react';
import notFound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='w-50 mx-auto'>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;