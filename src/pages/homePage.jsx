import React, { Fragment } from 'react';
import MasterLayout from '../masterLayout/masterLayout';
import Carousel from '../component/carousel'
import Swiper from '../component/swiper';

const homePage = () => {
    return (
        <MasterLayout>
            <Fragment>
                <Carousel/>
                <Swiper/>
            </Fragment>
            
        </MasterLayout>
    );
};

export default homePage;