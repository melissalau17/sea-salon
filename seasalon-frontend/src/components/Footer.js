import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        padding: "40px 0",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: "center", // default center for small screens
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              marginBottom: "20px",
              textAlign: "left", // left align when wide
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Contact Details
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "#bbb",
                fontSize: "1rem",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                <span style={{ marginRight: "10px" }}>📞</span>Thomas: 08123456789
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ marginRight: "10px" }}>📞</span>Sekar: 08164829372
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✉️</span>
                info@yourdomain.com
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              &copy; {new Date().getFullYear()} All rights reserved | This
              template is made with ❤️ by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#bbb")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
