import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </Link>

        {/* Mobile Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
          }}
        >
          ☰
        </button>

        {/* Links */}
        <div
          style={{
            display: isOpen ? "block" : "flex",
            flexGrow: 1,
            justifyContent: isOpen ? "flex-start" : "flex-end",
            position: isOpen ? "absolute" : "static",
            top: isOpen ? "60px" : "auto",
            left: 0,
            width: isOpen ? "100%" : "auto",
            backgroundColor: isOpen ? "#222" : "transparent",
            padding: isOpen ? "15px 20px" : 0,
          }}
        >
          <ul
            style={{
              display: isOpen ? "block" : "flex",
              flexDirection: isOpen ? "column" : "row",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: isOpen ? "15px" : "20px",
              alignItems: "center",
            }}
          >
            {/* Regular links */}
            {["Home", "About", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "color 0.3s",
                    display: "block",
                    padding: "5px 0",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#bbb")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Special Reservation link */}
            <li>
              <Link
                to="/reservation"
                style={{
                  backgroundColor: "#ff9800",
                  color: "#222",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "all 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e68900";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff9800";
                  e.currentTarget.style.color = "#222";
                }}
              >
                Reservation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
