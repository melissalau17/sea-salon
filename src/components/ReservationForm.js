import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { myCanisterActor } from "../declarations/my-canister";

const ReservationForm = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "👋 Hi! I'm your AI Beauty Consultant. Let's book your appointment. What's your name?" }
    ]);
    const [input, setInput] = useState("");
    const [reservationData, setReservationData] = useState({
        name: "",
        phoneNumber: "",
        serviceType: "",
        dateTime: "",
        branch: ""
    });
    const [branches, setBranches] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        axios.get("/api/branches")
            .then(res => setBranches(res.data || []))
            .catch(err => console.error("Error fetching branches:", err));
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const nextStep = async (userInput) => {
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);

        let botReply = "";

        if (!reservationData.name) {
            setReservationData(prev => ({ ...prev, name: userInput }));
            botReply = "Great! What's your phone number?";
        } else if (!reservationData.phoneNumber) {
            setReservationData(prev => ({ ...prev, phoneNumber: userInput }));
            botReply = "Which service would you like? (Haircut, Manicure, Facial)";
        } else if (!reservationData.serviceType) {
            setReservationData(prev => ({ ...prev, serviceType: userInput.toLowerCase() }));
            botReply = "When would you like to come? (Select date and time)";
        } else if (!reservationData.dateTime) {
            setReservationData(prev => ({ ...prev, dateTime: userInput }));
            botReply = "Which branch do you prefer? ";
        } else if (!reservationData.branch) {
            const selectedBranch = branches.find(b => b.branchName.toLowerCase() === userInput.toLowerCase())?.branchName || branches[0]?.branchName;
            setReservationData(prev => ({ ...prev, branch: selectedBranch }));

            try {
                // Panggil method canister (misal saveReservation)
                await myCanisterActor.add_booking({
                status: "confirmed",
                stylist_id: [],
                appointment: reservationData.dateTime,
                service_type: reservationData.serviceType,
                duration_minutes: 60,
                name: reservationData.name,
                price_cents: 5000,
                customer_id: window.BigInt(Date.now()),
                age_group: "adult",
                });

                botReply = `✅ All set! Your appointment for ${reservationData.serviceType} at ${selectedBranch} on ${reservationData.dateTime} is booked. Thank you, ${reservationData.name}!`;
            } catch (error) {
                console.error(error);
                botReply = "❌ Sorry, something went wrong. Please try again later.";
            }
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
        }, 500);

        setInput("");
    };

    const handleSend = () => {
        if (input.trim()) nextStep(input.trim());
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            fontFamily: "Arial, sans-serif"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>AI Reservation</h2>
            <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "10px", padding: "5px" }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        textAlign: msg.sender === "bot" ? "left" : "right",
                        margin: "6px 0"
                    }}>
                        <span style={{
                            background: msg.sender === "bot" ? "#eee" : "#aaf",
                            padding: "8px 12px",
                            borderRadius: "15px",
                            display: "inline-block",
                            maxWidth: "80%",
                            wordWrap: "break-word"
                        }}>
                            {msg.text}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <div style={{ display: "flex" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your answer..."
                    style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
                <button onClick={handleSend} style={{
                    padding: "8px 12px",
                    marginLeft: "5px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    cursor: "pointer"
                }}>Send</button>
            </div>
        </div>
    );
};

export default ReservationForm;
