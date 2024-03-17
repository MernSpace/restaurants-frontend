import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';
const masterLayout = (props) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default masterLayout;