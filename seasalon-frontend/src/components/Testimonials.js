import React, { useState, useEffect } from "react";

import img1 from "../assets/images/testi-woman-1.jpg";
import img2 from "../assets/images/testi-woman-2.jpg";
import img3 from "../assets/images/testi-woman-3.png";

const testimonials = [
  {
    name: "Jennifer Moreno",
    role: "Client",
    text: "I love my eyebrow design. I'm usually very picky about my eyebrows and not everyone can give me what I want. You are amazing. Thank you for the amazing job you’ve done, I’ll be recommending you to my friends from now on!",
    img: img1,
  },
  {
    name: "Mary Matthews",
    role: "Client",
    text: "Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Glory!",
    img: img2,
  },
  {
    name: "Amanda Smith",
    role: "Client",
    text: "Thank you for the first-rate beauty service! I am very happy with the outcome. I feel fortunate to have met someone with years of training in makeup who is also bright and knowledgeable enough to determine my perfect style.",
    img: img3,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="site-section"
      style={{
        padding: "5em 0",
        position: "relative",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              position: "relative",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Testimonials of Our Clients
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: "translateX(-50%)",
                width: "50%",
                height: "1px",
                background: "#d9e2ef",
              }}
            />
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
            Thanks to our clients' regular reviews, testimonials, and comments
            we are able to improve our salon.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "400px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                opacity: index === currentTestimonial ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 0 22px rgba(0,0,0,0.1)",
                  borderBottom: "4px solid #cef1ea",
                  padding: "40px 30px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "20px",
                    boxShadow: "2px 0 9px rgba(0,0,0,0.1)",
                  }}
                />
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "#555",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <h4
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                border: "2px solid #a9a9a9",
                borderRadius: "50%",
                margin: "0 5px",
                cursor: "pointer",
                backgroundColor:
                  index === currentTestimonial ? "#cef1ea" : "transparent",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                if (index !== currentTestimonial) {
                  e.currentTarget.style.backgroundColor = "#cef1ea";
                  e.currentTarget.style.borderColor = "#cef1ea";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentTestimonial) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#a9a9a9";
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
