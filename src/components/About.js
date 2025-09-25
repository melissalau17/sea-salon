import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title + Subtitle */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6c757d",
              margin: 0,
            }}
          >
            Experience the best in hair and beauty treatments.
          </p>
        </div>

        {/* Content */}
        <div style={{ textAlign: "left" }}>
          <p
            style={{
              lineHeight: "1.8",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero non massa sollicitudin, vel maximus purus porttitor.
            Morbi varius, sapien vel rutrum ullamcorper, dolor magna congue nisi,
            eget malesuada nisi nisi sit amet lorem.
          </p>
          <p
            style={{
              lineHeight: "1.8",
              marginBottom: "0",
              color: "#333",
            }}
          >
            Vivamus nec volutpat sem, in semper leo. Suspendisse potenti.
            Suspendisse auctor, sem ut euismod pretium, dui augue consectetur
            elit, et egestas libero nisi sit amet ligula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
