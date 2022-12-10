import React from 'react';
import Resume from "../asset/Resume.pdf"
const Home = () => {
    return (
        <dv className='contaner'>
            <div className='text-center mt-10 text-xl font-bold '>
            <h1 className='py-2'>Hi I am Fardin Khan</h1>
            <h1 className='py-2'>I am front-end web developer</h1>
            <a href={Resume} download className='btn text-sm font-medium text-green-700'>Download Resume</a>
            </div>
        </dv>
    );
};

export default Home;