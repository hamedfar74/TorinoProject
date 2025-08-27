"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import Image from "next/image";
import { useRef } from "react";

const Slider = () => {
  const swiper = useSwiper();
  const swiperRef = useRef(null)
  
  return (
    <div className="container-slide">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={1.5}
        effect="coverflow"
        
        // centeredSlides={false}
        initialSlide={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 70,
          depth: 250,
          modifier: 2.2,
          slideShadows: true,
        }}
        // navigation
        pagination={{ clickable: true, type: "fraction" }}
        className="custom-swiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {["/pic1.svg", "/pic2.svg", "/pic3.svg", "/pic4.svg"].map((src, i) => (
          <SwiperSlide key={i} className="swiper-Image-parent">
            <Image
              fill
              src={src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
              alt={`slide-${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="buttons">
          <button onClick={() => swiperRef.current?.slideNext()}>next</button>
          <button onClick={() => swiperRef.current?.slidePrev()}>prev</button>
        </div>
    </div>
  );
};

export default Slider;

// /* استایل دکمه‌های ناوبری */
// .swiper-button-prev,
// .swiper-button-next {
//   color: green !important; /* رنگ سبز مثل تصویر */
//   font-size: 20px; /* اندازه فلش‌ها */
//   width: 30px;
//   height: 30px;
//   background: rgba(0, 128, 0, 0.2); /* پس‌زمینه نیمه‌شفاف سبز */
//   border-radius: 50%; /* دکمه‌ها گرد شوند */
//   transition: background 0.3s; /* انیمیشن برای تعامل */
// }

// .swiper-button-prev:hover,
// .swiper-button-next:hover {
//   background: rgba(0, 128, 0, 0.4); /* تیره‌تر شدن در هوروور */
// }

// /* استایل نشانگر */
// .swiper-pagination-fraction {
//   color: green; /* رنگ سبز مثل تصویر */
//   font-size: 16px;
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%); /* مرکزسازی */
// }

// /* شبیه‌سازی لایه‌ای بودن تصاویر */
// .swiper-slide {
//   position: absolute;
//   opacity: 0;
//   transition: opacity 0.5s;
// }

// .swiper-slide-active {
//   opacity: 1; /* فقط اسلاید فعال دیده شود */
// }

// .swiper-slide-prev,
// .swiper-slide-next {
//   opacity: 0.3; /* اسلایدها قبلی و بعدی کم‌رنگ‌تر */
// }
