import React, { Fragment } from 'react';
import SectionTitle from '../sectionTitle';
import FeaturedImg from '../../assets/images/home/featured.jpg'
import '../../component/home/featured.css'
const Featured = () => {
    return (
        <div className='featured pt-12 pb-12 mt-12'>
            <SectionTitle
            
            subHeading='Check it out'
            heading='FROM OUR MENU'
            />

            <div className=''>
                <div className='flex md:flex-1 px-24 py-12 text-white'>
                    <div>
                        <img src={FeaturedImg} alt="" />
                    </div>
                    <div className='pl-5'>
                        <h2 className='mb-2' >March 20, 2023</h2>
                        <p className='mb-3'> WHERE CAN I GET SOME?</p>
                        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-success'>Read More...</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;