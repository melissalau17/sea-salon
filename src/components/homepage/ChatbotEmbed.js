// src/components/homepage/ChatbotEmbed.js
import React from "react";

const ChatbotEmbed = () => {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}>
      <iframe
        src="https://icp.ninja/chatbot/GqRaj"
        width="400"
        height="600"
        style={{
          border: "none",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.15)"
        }}
        title="SEA-Salon Chatbot"
      />
    </div>
  );
};

export default ChatbotEmbed;
