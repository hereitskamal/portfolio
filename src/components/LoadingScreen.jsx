import { useEffect, useState } from "react";

const FULL_TEXT = "> kamal.dev";
const CHAR_DELAY = 55;

export default function LoadingScreen({ onComplete }) {
  const [chars, setChars] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // type characters
    const timers = FULL_TEXT.split("").map((_, i) =>
      setTimeout(() => setChars(i + 1), 200 + i * CHAR_DELAY)
    );

    const doneAt = 200 + FULL_TEXT.length * CHAR_DELAY;

    // blink cursor a couple times after done
    const b1 = setTimeout(() => setCursorOn(false), doneAt + 200);
    const b2 = setTimeout(() => setCursorOn(true), doneAt + 480);
    const b3 = setTimeout(() => setCursorOn(false), doneAt + 720);

    const fade = setTimeout(() => setFading(true), doneAt + 900);
    const done = setTimeout(() => onComplete(), doneAt + 1200);

    return () => [...timers, b1, b2, b3, fade, done].forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.35s ease" : "none",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <span
        style={{
          fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
          fontSize: "clamp(18px, 3vw, 26px)",
          color: "#e2e2e2",
          letterSpacing: "0.04em",
        }}
      >
        {FULL_TEXT.slice(0, chars)}
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1.1em",
            background: "#e2e2e2",
            verticalAlign: "text-bottom",
            opacity: cursorOn ? 1 : 0,
            marginLeft: 2,
          }}
        />
      </span>
    </div>
  );
}
