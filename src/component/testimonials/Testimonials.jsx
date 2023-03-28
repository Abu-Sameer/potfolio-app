import React from 'react';
import './Testimonials.css';
import av from '../../assect/av.jpeg';
import av2 from '../../assect/av2.jpeg';
import av3 from '../../assect/av3.jpeg';
import av4 from '../../assect/av4.jpeg';
import av5 from '../../assect/av5.jpeg';
import av6 from '../../assect/av6.jpg';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av} alt="clients" />
          </div>
          <h5 className="client-name">Morgan Lucas</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av2} alt="clients" />
          </div>
          <h5 className="client-name">Harlen Bright</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av3} alt="clients" />
          </div>
          <h5 className="client-name">Nicolas Cole</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av4} alt="clients" />
          </div>
          <h5 className="client-name">Parker James</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av5} alt="clients" />
          </div>
          <h5 className="client-name">Walker Herderson</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={av6} alt="clients" />
          </div>
          <h5 className="client-name">Potter williams</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis beatae fugiat ab sequi aperiam mollitia laudantium, fuga
            enim deleniti eos iusto libero voluptate. Quis rem tempore
            voluptatem. Ea, alias?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
