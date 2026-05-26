import { useState } from "react";

const OPTIONS = [
  { type: "recruiter", emoji: "🎯", label: "Recruiter",         desc: "Looking for talent"      },
  { type: "hr",        emoji: "🤝", label: "HR Professional",   desc: "Evaluating culture fit"  },
  { type: "developer", emoji: "💻", label: "Fellow Developer",  desc: "Here for the stack"      },
  { type: "client",    emoji: "🚀", label: "Potential Client",  desc: "Need something built"    },
  { type: "visitor",   emoji: "👀", label: "Just Exploring",    desc: "Curious visitor"         },
];

const FALLBACK = {
  recruiter: (n) => `${n}, you're about to see 5+ years of engineering that ships.`,
  hr:        (n) => `${n}, Kamal leads teams, mentors devs, and thrives in great cultures.`,
  developer: (n) => `${n}, welcome — let's talk stack, architecture, and shipping clean code.`,
  client:    (n) => `${n}, great timing — Kamal's ready to build your next big thing.`,
  visitor:   (n) => `${n}, welcome to Kamal's corner of the internet. Explore freely.`,
};

// Step 1: select type + name  →  Step 2: loading  →  Step 3: greeting display
export default function VisitorSelect({ onSelect }) {
  const [step, setStep]           = useState(1);
  const [selected, setSelected]   = useState(null);
  const [name, setName]           = useState("");
  const [greeting, setGreeting]   = useState("");
  const [exiting, setExiting]     = useState(false);
  const [hovered, setHovered]     = useState(null);

  const canContinue = selected && name.trim().length > 0;

  const handleContinue = async () => {
    if (!canContinue) return;
    setStep(2);

    const trimmedName = name.trim();
    let greet = FALLBACK[selected]?.(trimmedName) ?? FALLBACK.visitor(trimmedName);

    try {
      const res = await fetch("/api/personalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorType: selected, visitorName: trimmedName }),
      });
      const data = await res.json();
      if (data.greeting) greet = data.greeting;
    } catch {
      // use fallback
    }

    setGreeting(greet);
    setStep(3);
  };

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => onSelect(selected, greeting, name.trim()), 420);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "24px",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.42s ease",
      }}
    >
      {/* ── Step 1: Who are you + name ── */}
      {step === 1 && (
        <div style={{ textAlign: "center", width: "100%", maxWidth: 580 }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 14 }}>
            Before we start
          </p>
          <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 700, color: "#111", lineHeight: 1.15, marginBottom: 8 }}>
            Who are you?
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 36 }}>
            I'll tailor the experience just for you
          </p>

          {/* Visitor type cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 10, marginBottom: 28 }}>
            {OPTIONS.map((opt) => {
              const isSelected = selected === opt.type;
              const isHovered  = hovered === opt.type && !isSelected;
              return (
                <button
                  key={opt.type}
                  onClick={() => setSelected(opt.type)}
                  onMouseEnter={() => setHovered(opt.type)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    padding: "16px 10px",
                    borderRadius: 14,
                    border: isSelected ? "2px solid #000" : isHovered ? "1.5px solid #111" : "1.5px solid #e5e7eb",
                    background: isSelected ? "#000" : isHovered ? "#f5f5f5" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 7 }}>{opt.emoji}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isSelected ? "#fff" : "#111", marginBottom: 2, lineHeight: 1.3 }}>
                    {opt.label}
                  </div>
                  <div style={{ fontSize: 10, color: isSelected ? "rgba(255,255,255,0.6)" : "#9ca3af" }}>
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Name input */}
          <div style={{ maxWidth: 320, margin: "0 auto 24px" }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleContinue()}
              placeholder="And your name?"
              style={{
                width: "100%",
                padding: "12px 18px",
                borderRadius: 30,
                border: "1.5px solid #e5e7eb",
                fontSize: 14,
                outline: "none",
                textAlign: "center",
                color: "#111",
                background: "#fafafa",
                boxSizing: "border-box",
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#111")}
              onBlur={(e)  => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            style={{
              padding: "12px 36px",
              borderRadius: 30,
              border: "none",
              background: canContinue ? "#000" : "#e5e7eb",
              color: canContinue ? "#fff" : "#9ca3af",
              fontSize: 14,
              fontWeight: 600,
              cursor: canContinue ? "pointer" : "default",
              transition: "all 0.2s ease",
            }}
          >
            Continue →
          </button>
        </div>
      )}

      {/* ── Step 2: Generating ── */}
      {step === 2 && (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 36,
              height: 36,
              border: "2.5px solid #e5e7eb",
              borderTopColor: "#000",
              borderRadius: "50%",
              animation: "vs-spin 0.65s linear infinite",
              margin: "0 auto 20px",
            }}
          />
          <p style={{ color: "#6b7280", fontSize: 14 }}>
            Personalizing your experience, {name.trim()}…
          </p>
        </div>
      )}

      {/* ── Step 3: AI Greeting ── */}
      {step === 3 && (
        <div
          style={{
            textAlign: "center",
            maxWidth: 540,
            animation: "vs-fadein 0.5s ease",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1.5px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              margin: "0 auto 28px",
            }}
          >
            ✦
          </div>

          {/* AI Greeting — the first thing they really see */}
          <p
            style={{
              fontSize: "clamp(20px, 4vw, 30px)",
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.35,
              marginBottom: 32,
              letterSpacing: "-0.3px",
            }}
          >
            {greeting}
          </p>

          <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 36 }}>
            Generated just for you · {OPTIONS.find((o) => o.type === selected)?.emoji} {OPTIONS.find((o) => o.type === selected)?.label}
          </p>

          {/* Enter button */}
          <button
            onClick={handleEnter}
            style={{
              padding: "13px 40px",
              borderRadius: 30,
              border: "1.5px solid #000",
              background: "#000",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Enter Portfolio →
          </button>
        </div>
      )}

      <style>{`
        @keyframes vs-spin    { to { transform: rotate(360deg); } }
        @keyframes vs-fadein  { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
