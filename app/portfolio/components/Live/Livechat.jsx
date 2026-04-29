import { useState } from "react";
import "./Livechat.css";

/** Urbancode WhatsApp — same number as site contact (+91 98787 98797) */
const WHATSAPP_URL = "https://wa.me/919878798797";

const REPLIES = {
  mern: [
    "MERN Stack is our most popular course! 🚀",
    "Duration: 4 months | All levels | Live projects included.",
    "Call +91 98787 98797 to enroll!",
  ],
  fee: [
    "Course fees vary by program.",
    "Call +91 98787 98797 for detailed fee structure.",
    "Or WhatsApp us for the complete brochure! 📄",
  ],
  placement: [
    "We offer 100% placement assistance! 🎯",
    "Students placed in Zoho, Amazon, TCS, Infosys & more.",
    "Average package: ₹6-12 LPA.",
  ],
  batch: [
    "New batches start every month! 📅",
    "Both weekday and weekend batches available.",
    "Call +91 98787 98797 to book your spot!",
  ],
  hi: [
    "Hello! 👋 Welcome to Urbancode Edutech!",
    "How can I help you today?",
  ],
  hello: [
    "Hi there! 😊 Great to have you here!",
    "What would you like to know about Urbancode?",
  ],
  default: [
    "Thanks for your message! 🙏",
    "For detailed info, call: +91 98787 98797",
    "Or WhatsApp us for instant replies! 💬",
  ],
};

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! Welcome to Urbancode Edutech!" },
    { from: "bot", text: "Ask me about courses, fees, placements or batch schedules!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const msg = input.trim();
    if (!msg) return;

    const newMsgs = [...messages, { from: "user", text: msg }];
    setMessages(newMsgs);
    setInput("");

    const key = Object.keys(REPLIES).find((k) =>
      msg.toLowerCase().includes(k)
    ) || "default";

    const replies = REPLIES[key];
    replies.forEach((reply, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      }, 600 * (i + 1));
    });
  };

  return (
    <>
      <div className="livechat-fabs" aria-label="Quick contact">
        <button
          type="button"
          className={`livechat-fab livechat-fab--chat ${open ? "livechat-fab--active" : ""}`}
          onClick={() => setOpen(!open)}
          title="Open Urbancode support chat"
          aria-expanded={open}
          aria-controls="urbancode-support-panel"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </button>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="livechat-fab livechat-fab--wa"
          title="Chat on WhatsApp"
          aria-label="Open Urbancode on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Chat Box */}
      <div
        id="urbancode-support-panel"
        className={`chat-box ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="false"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="chat-head">
          <div className="chat-head-info">
            <div className="chat-head-av">🎓</div>
            <div>
              <div className="chat-head-name">Urbancode Support</div>
              <div className="chat-head-status">
                <span className="chat-dot"></span>Online now
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Messages */}
        <div className="chat-msgs">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input-row">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="chat-send" onClick={sendMessage}>
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}