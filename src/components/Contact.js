import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 0",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#6c757d",
          marginBottom: "10px",
        }}
      >
        Email:{" "}
        <a
          href="mailto:info@salon.com"
          style={{
            color: "#007bff",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
        >
          info@salon.com
        </a>{" "}
        | Phone:{" "}
        <a
          href="tel:1234567890"
          style={{
            color: "#007bff",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
        >
          123-456-7890
        </a>
      </p>
    </section>
  );
}

export default Contact;
