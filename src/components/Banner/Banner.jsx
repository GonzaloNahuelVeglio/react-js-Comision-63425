import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      image: "../img/banner_1.webp",
      title: "Descubrí nuestras recetas",
      subtitle: "Prepará platos deliciosos con ingredientes frescos y saludables.",
      link: "/recetario",
      buttonText: "Ver Recetas",
    }, 
    {
      image: "../img/banner_2.webp",
      title: "Sumá sabor a tu vida",
      subtitle: "Explorá ingredientes únicos y recetas increíbles.",
      link: "/recetario",
      buttonText: "Explorar Recetas",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      speed={1200}
      loop
      className="banner-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide">
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <Link to={slide.link} className="slide-button">{slide.buttonText}</Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
