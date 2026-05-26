import { useState, useRef, useEffect } from "react";

const GREETING = {
  role: "assistant",
  content: "Hi! I'm Kamal's AI assistant. Ask me anything about his skills, experience, or availability 👋",
};

const SUGGESTIONS = [
  "What's Kamal's current role?",
  "What's his main tech stack?",
  "Is he available for hire?",
  "Show me his best projects",
];

const TypingDots = () => (
  <div style={{ display: "flex", gap: 4, padding: "4px 2px" }}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{
          width: 7,
          height: 7,
          background: "#9ca3af",
          borderRadius: "50%",
          animation: "askkamal-bounce 1.2s ease infinite",
          animationDelay: `${i * 0.18}s`,
        }}
      />
    ))}
  </div>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, open]);

  const send = async (text) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;

    setInput("");
    setHasError(false);
    const next = [...messages, { role: "user", content: userText }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error || "No reply");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I hit a snag. You can reach Kamal directly at itskamalofficial@gmail.com 🙂",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 88,
            right: 24,
            width: 380,
            maxWidth: "calc(100vw - 32px)",
            height: 500,
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 24px 80px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9998,
            animation: "askkamal-up 0.22s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {/* Header — minimal light */}
          <div
            style={{
              background: "#fff",
              borderBottom: "1px solid #f0f0f0",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "#f9f9f9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  border: "1px solid #e5e7eb",
                  color: "#111",
                }}
              >
                ✦
              </div>
              <div>
                <div style={{ color: "#111", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
                  Ask Kamal
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      background: "#22c55e",
                      borderRadius: "50%",
                      boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                    }}
                  />
                  <span style={{ color: "#9ca3af", fontSize: 11 }}>AI Assistant · Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                color: "#9ca3af",
                background: "none",
                border: "none",
                cursor: "pointer",
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                lineHeight: 1,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px 14px 6px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "9px 13px",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 3px 16px"
                        : "16px 16px 16px 3px",
                    background: msg.role === "user" ? "#000" : "#f4f4f5",
                    color: msg.role === "user" ? "#fff" : "#111827",
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    background: "#f4f4f5",
                    borderRadius: "16px 16px 16px 3px",
                    padding: "10px 14px",
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Suggestion chips */}
            {showSuggestions && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => send(s)}
                    style={{
                      background: "#f4f4f5",
                      border: "1px solid #e5e7eb",
                      borderRadius: 20,
                      padding: "5px 12px",
                      fontSize: 12,
                      color: "#374151",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "10px 12px 12px",
              borderTop: "1px solid #f3f4f6",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Ask anything about Kamal…"
                style={{
                  flex: 1,
                  padding: "9px 14px",
                  borderRadius: 24,
                  border: "1px solid #e5e7eb",
                  fontSize: 13,
                  outline: "none",
                  background: "#f9fafb",
                  color: "#111",
                }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: input.trim() && !loading ? "#000" : "#e5e7eb",
                  border: "none",
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.15s",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke={input.trim() && !loading ? "#fff" : "#9ca3af"}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p style={{ fontSize: 10, color: "#9ca3af", textAlign: "center", marginTop: 6 }}>
              Powered by Gemini · Kamal's AI rep
            </p>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        title="Ask Kamal AI"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#000",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.28)",
          zIndex: 9999,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.38)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.28)";
        }}
      >
        {open ? (
          <svg width="18" height="18" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Tooltip label on first load */}
      {!open && (
        <div
          style={{
            position: "fixed",
            bottom: 32,
            right: 88,
            background: "#000",
            color: "#fff",
            fontSize: 12,
            fontWeight: 500,
            padding: "5px 12px",
            borderRadius: 20,
            zIndex: 9997,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            animation: "askkamal-fadein 0.4s 1.2s both",
          }}
        >
          Ask me anything ✦
          <div
            style={{
              position: "absolute",
              right: -5,
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "6px solid #000",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes askkamal-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes askkamal-bounce {
          0%, 60%, 100% { transform: translateY(0);    }
          30%            { transform: translateY(-5px); }
        }
        @keyframes askkamal-fadein {
          from { opacity: 0; transform: translateX(6px); }
          to   { opacity: 1; transform: translateX(0);   }
        }
      `}</style>
    </>
  );
}
