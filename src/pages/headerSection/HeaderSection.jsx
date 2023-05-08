import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'
// --swiper--
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HeaderSection() {

    // --ani--
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                duration: 1
            }
        }
    }

    const item = {
        hidden: { scale: 0 },
        show: { scale: 1 }
    }
    return (
        <header>
            <motion.div variants={container} initial="hidden" animate="show" className="mainDiv">
                <motion.h1 variants={item}>meat-free</motion.h1>
                <motion.img variants={item} src='./images/burgerImg.png' />
                <motion.h1 variants={item}>your mind</motion.h1>
            </motion.div>
            {/* --logos slider-- */}
            <div className="logoSlider">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiper logoSlider"
                >
                    <SwiperSlide>
                        <div className="logo">
                            <LazyLoadImage src='./images/slider1.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider2.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider3.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider4.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider5.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider6.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider7.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider8.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider1.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider2.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider3.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider4.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider5.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider6.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider7.png' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo">

                            <LazyLoadImage src='./images/slider8.png' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </header>
    )
}
