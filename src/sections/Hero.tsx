'use client';
import React, { useEffect } from 'react';
import { heroSlides } from '@/data/data';
import './hero.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import HeroSlide from '@/components/HeroSlide';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper 
              navigation={true}
              pagination={{ 
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
              }}
              loop={true}
              slidesPerView="auto"
              speed={500}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]} 
              className="slideFeatureedPosts"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <HeroSlide slide={slide} />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
