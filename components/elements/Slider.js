"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import Image from "next/image";

const Slider = () => {
  return (
    <div
      dir="rtl"
      style={{ padding: "10px", textAlign: "center", overflow: "visible" }}
    >
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={10}
        slidesPerView={1.5}
        effect="coverflow"
        centeredSlides={true}
        initialSlide={0}
        coverflowEffect={{
          rotate: 0, // چرخش صفر
          stretch: 110, // فاصله بین اسلایدها
          depth: 500, // عمق
          modifier: 1,
          slideShadows: true, // سایه‌ها غیرفعال
        }}
        navigation
        pagination={{ clickable: true, type: "fraction" }}
        style={{
          width: "280px",
          height: "280px",
          position: "relative",
        }}
        className="custom-swiper"
      >
        {["/pic1.svg", "/pic2.svg", "/pic3.svg", "/pic4.svg"].map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              width={200}
              height={200}
              src={src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              alt={`slide-${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
