import React, { Fragment } from 'react';
import MasterLayout from '../masterLayout/masterLayout';
import Carousel from '../component/carousel'
import Swiper from '../component/swiper';
import PopularMenu from '../component/home/PopularMenu';

const homePage = () => {
    return (
        <MasterLayout>
            <Fragment>
                <Carousel/>
                <Swiper/>
                <PopularMenu/>
            </Fragment>
            
        </MasterLayout>
    );
};

export default homePage;