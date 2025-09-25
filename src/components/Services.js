import React from "react";
import haircut from "../assets/images/hair-cutting.png";
import manicure from "../assets/images/pedicure.png";
import facial from "../assets/images/beauty-treatment.png";

const Services = () => {
  const services = [
    {
      img: haircut,
      title: "Haircuts & Styling",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      price: "$29",
    },
    {
      img: manicure,
      title: "Manicure & Pedicure",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      price: "$46",
    },
    {
      img: facial,
      title: "Facial Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      price: "$24",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            fontWeight: "700",
          }}
        >
          Featured Services
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                textAlign: "center",
                marginBottom: "30px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  height: "100%",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  style={{ marginBottom: "20px", maxWidth: "80px" }}
                />
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6c757d",
                    marginBottom: "10px",
                  }}
                >
                  {service.desc}
                </p>
                <p
                  style={{
                    color: "#007bff",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
