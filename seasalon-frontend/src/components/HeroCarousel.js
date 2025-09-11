import React, { useState, useEffect } from "react";

import salon1 from "../assets/images/salon1.jpg";
import salon2 from "../assets/images/salon2.png";
import salon3 from "../assets/images/salon3.jpeg";

const slides = [
  {
    img: salon1,
    title: "Your Beauty Is Our Priority",
    subtitle:
      "At our salon, we believe that beauty begins with a single step. Let us guide you on a journey to flawless hair and radiant skin.",
  },
  {
    img: salon2,
    title: "The Best Way To Relax",
    subtitle:
      "Unwind and rejuvenate with our range of spa services. From soothing massages to invigorating facials, we promise an experience that revitalizes your body and mind.",
  },
  {
    img: salon3,
    title: "Our Professionals Are Here For You",
    subtitle:
      "Our team of highly skilled stylists and beauty experts are dedicated to bringing your vision to life. With years of experience, we deliver exceptional results with every service.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
            }}
          ></div>

          {/* Text Content */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              color: "white",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <div style={{ maxWidth: "800px" }}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "1rem",
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0.75rem",
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "#fff",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.4)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0.75rem",
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "#fff",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.4)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
