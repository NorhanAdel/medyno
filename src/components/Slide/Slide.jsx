import React, { useState } from "react";
import Rating from "../Rating/Rating";
import "./Slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from "react-router-dom"
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Autoplay } from "swiper/modules";

function Slide({ data }) {
  return (
    <div className="slide-container">
      <Swiper
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className="slide-content" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} className="imge-slide" />
                <h3 className="slide-title">{item.title}</h3>
                <Rating rating={item.rating} reviews={item.reviews} />
                <div className="slide-price">${item.price}</div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slide;
