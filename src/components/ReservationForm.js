import React, { useState, useEffect } from "react";
import axios from "axios";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    axios
      .get("/api/branches")
      .then((response) => {
        setBranches(response.data || []);
        setSelectedBranch(response.data[0]?.branchName || "");
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      name,
      phoneNumber,
      serviceType,
      dateTime,
      branch: selectedBranch,
    };
    axios
      .post("/api/reservations", reservation)
      .then(() => {
        alert("Reservation submitted successfully!");
        setName("");
        setPhoneNumber("");
        setServiceType("");
        setDateTime("");
      })
      .catch((error) => {
        console.error("Error submitting reservation:", error);
        alert("Failed to submit reservation. Please try again.");
      });
  };

  return (
    <section
      id="reservation"
      style={{
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Make a Reservation
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Phone Number */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Phone Number:
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Service Type */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Service Type:
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            >
              <option value="">Select a Service</option>
              <option value="haircut">Haircut and Styling</option>
              <option value="manicure">Manicure and Pedicure</option>
              <option value="facial">Facial Treatments</option>
            </select>
          </div>

          {/* Date & Time */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Date and Time:
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Branch */}
          <div style={{ marginBottom: "30px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Branch:
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            >
              {branches.map((branch) => (
                <option key={branch.branchName} value={branch.branchName}>
                  {branch.branchName}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
