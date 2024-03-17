import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionTitle from './sectionTitle';

import sli1 from '../assets/images/home/slide1.jpg'
import sli2 from '../assets/images/home/slide2.jpg'
import sli3 from '../assets/images/home/slide3.jpg'
import sli4 from '../assets/images/home/slide4.jpg'
import sli5 from '../assets/images/home/slide5.jpg'


const swiper = () => {
    return (
        <>
        <SectionTitle
        heading={'order online'}
        subHeading={'10.00 am to 10.00 pm'}
        />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={sli1} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli2} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli3} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli4} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli5} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={sli1} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli2} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli3} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sli4} alt="" />
            <h3 className='uppercase text-4xl text-center text-bold -mt-16 text-white'>salat</h3>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default swiper;