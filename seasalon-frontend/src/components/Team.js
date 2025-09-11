import React from "react";
import t1 from "../assets/images/hairdresser1.jpg";
import t2 from "../assets/images/hair-guy.jpg";
import t3 from "../assets/images/hair-girl.jpg";
import t4 from "../assets/images/hair-guy2.jpg";
import t5 from "../assets/images/woman-hairdresser.jpg";
import t6 from "../assets/images/male-hairdresser.jpg";
import t7 from "../assets/images/woman-hairdresser-salon.jpg";

const teamMembers = [
  { name: "Mary Lucas", role: "Founder, Senior Esthetician", img: t1 },
  { name: "Janette Wade", role: "Hairdresser", img: t2 },
  { name: "Ann Williams", role: "Visagiste", img: t3 },
  { name: "Karen York", role: "Cosmetologist", img: t4 },
  { name: "Ann Butler", role: "Manicurist", img: t5 },
  { name: "Kate Wilson", role: "Esthetician", img: t6 },
  { name: "Susan Robinson", role: "Hair Colorist", img: t7 },
];

const Team = () => {
  return (
    <section
      id="team"
      style={{
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Our Professional Team
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#6c757d",
            margin: "0 auto 40px",
            maxWidth: "700px",
            lineHeight: "1.8",
          }}
        >
          We employ the best experts in the beauty industry and educate our own
          award-winning specialists through constant training.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <h5
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {member.name}
              </h5>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#6c757d",
                  margin: 0,
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          style={{
            display: "inline-block",
            marginTop: "40px",
            padding: "12px 30px",
            color: "#fff",
            backgroundColor: "#007bff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          View All Team
        </a>
      </div>
    </section>
  );
};

export default Team;
