// components/Chatbot.js
import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Halo! Saya AI Beauty Consultant Salon Cantik. Saya bisa membantu:\n\n• 🎨 Rekomendasi warna rambut berdasarkan kulit\n• 💇 Gaya rambut sesuai bentuk wajah\n• 📅 Booking appointment\n• 💰 Konsultasi service & harga\n\nApa yang bisa saya bantu hari ini?",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // OLLAMA API INTEGRATION
  const callOllamaAPI = async (userMessage) => {
    setIsTyping(true);
    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.1:8b',
          prompt: generateBeautyPrompt(userMessage),
          stream: false,
          options: {
            temperature: 0.7,
            top_p: 0.9,
          }
        })
      });
      
      if (!response.ok) throw new Error('Ollama API error');
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Ollama error:', error);
      return getAdvancedFallbackResponse(userMessage);
    } finally {
      setIsTyping(false);
    }
  };

  // ADVANCED PROMPT ENGINEERING FOR BEAUTY CONSULTATION
  const generateBeautyPrompt = (userMessage) => {
    return `Anda adalah AI Beauty Consultant expert dengan spesialisasi:
- Warna rambut berdasarkan undertone kulit Indonesia
- Gaya rambut sesuai bentuk wajah Asia
- Perawatan rambut iklim tropis

CONTEXT: Salon di Indonesia, jenis rambut Asia, iklim tropis lembab.

USER QUESTION: "${userMessage}"

INSTRUCTIONS:
1. Berikan rekomendasi spesifik dan personalized
2. Sertakan alasan beauty/scientific reasoning
3. Maximum 4 kalimat, friendly tone
4. Akhiri dengan pertanyaan engaging
5. Gunakan emoji relevant

Jawab dalam Bahasa Indonesia:`;
  };

  // ADVANCED BEAUTY KNOWLEDGE BASE
  const beautyKnowledgeBase = {
    skinToneHairColor: {
      coolUndertone: "🎨 Untuk kulit cool undertone (vein biru/ungu):\n• Warna dingin: ash brown, platinum, burgundy\n• Hindari: warm copper, golden blonde\n• Rekomendasi: Cool brown level 6-7",
      warmUndertone: "🌞 Untuk kulit warm undertone (vein hijau):\n• Warna hangat: honey blonde, caramel, chocolate\n• Hindari: ash tones, silver\n• Rekomendasi: Warm brown level 5-6",
      neutral: "🌈 Untuk kulit neutral: Bisa pakai semua tone!\n• Safe choice: neutral brown\n• Experiment: balayage, ombre"
    },
    faceShapeHairstyle: {
      oval: "🥚 Bentuk wajah oval: Lucky you! Cocok semua gaya\n• Recommended: Layer medium, side part\n• Avoid: Heavy bangs yang nutup wajah",
      round: "🔴 Bentuk wajah round: Create elongation\n• Recommended: Long layer, volume atas\n• Avoid: Bob pendek, round shape",
      square: "◼️ Bentuk wajah square: Soften angles\n• Recommended: Wavy layer, side sweep\n• Avoid: Straight blunt cut",
      heart: "❤️ Bentuk wajah heart: Balance forehead\n• Recommended: Chin-length bob, wispy bang\n• Avoid: Volume atas berlebihan"
    },
    hairTypeTreatment: {
      thin: "💨 Rambut tipis: Volumizing treatment\n• Service: Volumizing cut, root lift\n• Product: Lightweight shampoo\n• Avoid: Heavy conditioner",
      thick: "🦁 Rambut tebal: Smoothing treatment\n• Service: Layer thinning, keratin\n• Product: Moisturizing mask\n• Style: Better hold styling",
      curly: "🌀 Rambut keriting: Definition & moisture\n• Service: Deva cut, hydration\n• Product: Curl cream, gel\n• Style: Diffuser drying",
      damaged: "🔧 Rambut damage: Repair intensive\n• Service: Olaplex, protein treatment\n• Product: Repair mask, heat protect\n• Avoid: Heat styling"
    }
  };

  // ENHANCED FALLBACK WITH BEAUTY AI
  const getAdvancedFallbackResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Warna rambut berdasarkan kulit
    if (msg.includes('warna') || msg.includes('color')) {
      return `🎨 Konsultasi warna rambut berdasarkan kulit:\n\n1. **Cool Undertone** (vein biru/ungu): Ash brown, platinum\n2. **Warm Undertone** (vein hijau): Honey blonde, caramel\n3. **Neutral**: Bisa semua tone!\n\nApa undertone kulit Anda? Bisa check vein di pergelangan tangan 💫`;
    }
    
    // Gaya rambut berdasarkan wajah
    if (msg.includes('gaya') || msg.includes('style') || msg.includes('wajah')) {
      return `💇 Rekomendasi gaya rambut berdasarkan bentuk wajah:\n\n• **Oval**: Semua gaya cocok! ✨\n• **Round**: Long layer untuk elongation\n• **Square**: Wavy layer soften angles\n• **Heart**: Chin-length bob\n\nBentuk wajah Anda yang mana? 😊`;
    }
    
    // Jenis rambut
    if (msg.includes('tipis') || msg.includes('tebal') || msg.includes('keriting')) {
      return `🔍 Untuk rambut tipis: Volumizing cut & root lift\nUntuk rambut tebal: Layer thinning & smoothing\nUntuk rambut keriting: Hydration & definition\n\nButuh rekomendasi khusus untuk jenis rambut Anda?`;
    }
    
    // Booking
    if (msg.includes('booking') || msg.includes('appointment')) {
      return `📅 Untuk booking appointment:\n\n⏰ Durasi service:\n- Haircut: 1 jam\n- Coloring: 2-3 jam\n- Treatment: 1.5 jam\n\nMau booking untuk service apa? 🎯`;
    }
    
    // Harga
    if (msg.includes('harga') || msg.includes('price') || msg.includes('biaya')) {
      return `💰 Price Range Services:\n\n✂️ Haircut: Rp 80k-150k\n🎨 Coloring: Rp 200k-500k\n💆 Treatment: Rp 150k-300k\n💇 Styling: Rp 100k-250k\n\nService spesifik mana yang ingin diketahui?`;
    }
    
    // Default intelligent response
    return `🤔 Sebagai AI Beauty Consultant, saya khusus membantu:\n\n• 🎨 Color matching berdasarkan kulit\n• 💇 Style recommendation sesuai wajah\n• 🔍 Hair treatment untuk jenis rambut\n• 📅 Booking appointment\n\nArea mana yang ingin Anda explore? 💫`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Get AI response
    const botResponse = await callOllamaAPI(inputMessage);
    setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Quick replies untuk UX better
  const quickReplies = [
    "Rekomendasi warna rambut",
    "Gaya rambut untuk wajah round",
    "Booking appointment",
    "Harga coloring",
    "Treatment rambut damage"
  ];

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        💇‍♀️
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>🎨 AI Beauty Consultant</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Replies */}
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button 
                key={index}
                className="quick-reply"
                onClick={() => {
                  setInputMessage(reply);
                  setTimeout(handleSendMessage, 100);
                }}
              >
                {reply}
              </button>
            ))}
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tanya tentang warna rambut, gaya, booking..."
            />
            <button onClick={handleSendMessage} disabled={isTyping}>
              {isTyping ? '⏳' : '✨'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;