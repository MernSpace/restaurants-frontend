import React, { Fragment } from 'react';
import MasterLayout from '../masterLayout/masterLayout';
import Carousel from '../component/carousel'
import Swiper from '../component/swiper';
import PopularMenu from '../component/home/PopularMenu';
import ProductCard from '../component/home/ProductCard';
import Featured from '../component/home/Featured';

const homePage = () => {
    return (
        <MasterLayout>
            <Fragment>
                <Carousel/>
                <Swiper/>
                <PopularMenu/>
                <ProductCard/>
                <Featured/>
            </Fragment>
            
        </MasterLayout>
    );
};

export default homePage;