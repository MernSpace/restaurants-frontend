import React from 'react';

const sectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-4'>
            <p className='text-2xl py-2 text-orange-400'>--- {subHeading} ---</p>
            <h3 className='text-4xl uppercase bold border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default sectionTitle;