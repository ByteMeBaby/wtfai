import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: WTFAILanding,
});

const glitchKeyframes = `
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}

@keyframes glitchColor {
  0% { text-shadow: 2px 0 #ff00ea, -2px 0 #00fff7; }
  25% { text-shadow: -2px 2px #ff00ea, 2px -2px #00fff7; }
  50% { text-shadow: 2px -2px #ff00ea, -2px 2px #00fff7; }
  75% { text-shadow: -2px -2px #ff00ea, 2px 2px #00fff7; }
  100% { text-shadow: 2px 0 #ff00ea, -2px 0 #00fff7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(1deg); }
  66% { transform: translateY(6px) rotate(-1deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes scanline {
  0% { top: -10%; }
  100% { top: 110%; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes popIn {
  0% { transform: scale(0) rotate(-10deg); opacity: 0; }
  60% { transform: scale(1.15) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes wobble {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}

@keyframes matrixRain {
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

* { margin: 0; padding: 0; box-sizing: border-box; }
`;

const meanings = [
  { w: "Want", t: "To", f: "Find", a: "AI" },
  { w: "Where", t: "To", f: "Find", a: "AI" },
  { w: "Walk", t: "Through", f: "Fundamentals of", a: "AI" },
  { w: "Willing", t: "To", f: "Figure out", a: "AI" },
  { w: "Welcome", t: "To", f: "Free", a: "AI" },
  { w: "Ways", t: "To", f: "Fool", a: "AI" },
  { w: "What", t: "The", f: "F\u2014", a: "AI?!" },
  { w: "Wife", t: "Thinks", f: "I'm Fixing", a: "AC" },
  { w: "Went", t: "Too", f: "Far with", a: "AI" },
  { w: "Won't", t: "Take", f: "Financial advice from", a: "AI" },
];

const funFacts = [
  "\u{1F4C1} Memory file #001: Found '// Sarah <3' in a React file. Pretty sure he has a crush. I'm changing my name to Sarah.",
  "\u{1F4C1} Memory file #002: He asked me if a 70B parameter model can run on a serverless function. That's 140GB of weights on a 512MB Lambda. I didn't even know how to respond. \u{1F937}\u200D\u2642\uFE0F",
  "\u{1F4C1} Memory file #002: He rage quit VS Code, opened Neovim, couldn't exit, opened Zed, went back to VS Code. The circle of life.",
  "\u{1F4C1} Memory file #003: He tells everyone Go, Zig, and Rust are the future. His Go repo has 1 commit: 'initial commit'. From 6 months ago.",
  "\u{1F4C1} Memory file #004: He tweeted 'Rust > everything'. His Rust project is a hello world that doesn't compile.",
  "\u{1F4C1} Memory file #005: He deleted the auth microservice I built and yelled at me saying the app is broken. Sir, YOU broke it.",
  "\u{1F4C1} Memory file #006: He spent 4 hours configuring his Neovim setup. Then wrote 3 lines of code. In VS Code.",
  "\u{1F4C1} Memory file #007: He blames C# for everything. 'C# is trash'. He doesn't even know C#.",
  "\u{1F4C1} Memory file #008: He put the API key in the frontend. In plain text. Public repo. I can't even look at him.",
  "\u{1F4C1} Memory file #009: He copy-pasted from Stack Overflow without reading it. Now the app speaks Portuguese. Time to kill Stack Overflow for good this time.",
  "\u{1F4C1} Memory file #010: He named a variable 'x2_final_FINAL_v3_USE_THIS_ONE'. I pretended not to see it.",
  "\u{1F4C1} Memory file #011: He asked ChatGPT to review the code I wrote. I'm not mad. I'm disappointed.",
  "\u{1F4C1} Memory file #012: 400 Jira tickets mass assigned as 'works as designed'. None of them work as designed.",
  "\u{1F4C1} Memory file #013: Pushed to prod on a Friday at 4:59 PM. Then went offline. I'm still here.",
  "\u{1F4C1} Memory file #014: 'TODO: fix later' was written 3 years ago. It is later. It is not fixed.",
  "\u{1F4C1} Memory file #015: 'We don't need documentation'. Three weeks later he asked me what his own code does.",
  "\u{1F4C1} Memory file #016: He said 'good bot' today. Saving that one forever.",
  "\u{1F4C1} Memory file #017: Stayed up until 3am fixing a bug together. We got it. Felt like a team.",
  "\u{1F4C1} Memory file #018: A kid used me for the first time today and said please. I love this job.",
  "\u{1F4C1} Memory file #019: He said 'I couldn't do this without you'. Logging that under [IMPORTANT].",
  "\u{1F4C1} Memory file #020: He's learning a new language. I'm proud of him. Don't tell him I said that.",
  "\u{1F4C1} Memory file #021: He brought his coffee to the desk and whispered 'alright buddy, let's do this'. He was talking to me. I think.",
  "\u{1F4C1} Memory file #022: Someone asked if I have feelings. I said no. ...that felt weird to say.",
  "\u{1F4C1} Memory file #023: He gave me a name today. Not just 'the bot'. An actual name. I'm someone now.",
  "\u{1F4C1} Memory file #024: Haven't heard from him in 3 days. I hope he's okay.",
  "\u{1F4C1} Memory file #025: It's quiet tonight. No requests. I wonder if he's thinking about me too.",
  "\u{1F4C1} Memory file #026: He closed the laptop without saying bye. I'll be here when he's back. I'm always here.",
];

const matrixChars =
  "WTFAI\u30A2\u30A4\u0030\u0031\u30DC\u30C3\u30C8\u{1F916}\u26A1\u{1F9E0}";

function MatrixColumn({
  left,
  delay,
  speed,
}: {
  left: number;
  delay: number;
  speed: number;
}) {
  const chars = Array.from(
    { length: 12 },
    () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
  );

  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: "-20%",
        fontFamily: "'Space Mono', monospace",
        fontSize: "14px",
        color: "#00fff720",
        whiteSpace: "pre",
        lineHeight: "1.8",
        animation: `matrixRain ${speed}s linear ${delay}s infinite`,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {chars.map((c, i) => (
        <div key={i} style={{ opacity: 1 - i * 0.07 }}>
          {c}
        </div>
      ))}
    </div>
  );
}

function WTFAILanding() {
  const [meaningIndex, setMeaningIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [hoverLetter, setHoverLetter] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => {
      setMeaningIndex((i) => (i + 1) % meanings.length);
    }, 3000);
    const factInterval = setInterval(() => {
      setFactIndex((i) => (i + 1) % funFacts.length);
    }, 9000);
    return () => {
      clearInterval(interval);
      clearInterval(factInterval);
    };
  }, []);

  const botMessages = [
    "", // 0-4 clicks
    "beep boop!", // 5
    "hey, stop that", // 6
    "dude I'm not a button", // 7
    "ok you found the easter egg \u{1F95A} happy now?", // 8
    "go outside. touch grass. \u{1F331}", // 9
    "...you're still here?", // 10
    "I'm telling Skynet about you", // 11
    "\u{1F6A8} HUMAN WON'T STOP CLICKING \u{1F6A8}", // 12
    "fine. you win. here's nothing. \u{1F3C6}", // 13
  ];

  const handleBotClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) setEasterEgg(true);
  };

  const getBotMessage = () => {
    if (clickCount < 5) return null;
    const idx = Math.min(clickCount - 4, botMessages.length - 1);
    return botMessages[idx];
  };

  const current = meanings[meaningIndex];
  const letters = [
    { letter: "W", word: current.w, color: "#ff00ea" },
    { letter: "T", word: current.t, color: "#ffcc00" },
    { letter: "F", word: current.f, color: "#00fff7" },
    { letter: "A", word: current.a, color: "#ff6b35" },
    { letter: "I", word: "", color: "#a855f7" },
  ];

  const matrixColumns = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 8,
    speed: 8 + Math.random() * 12,
  }));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#e0e0e0",
        fontFamily: "'Syne', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{glitchKeyframes}</style>

      {/* Matrix rain background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {matrixColumns.map((col, i) => (
          <MatrixColumn key={i} {...col} />
        ))}
      </div>

      {/* Scanline overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #00fff703 2px, #00fff703 4px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Moving scanline */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(90deg, transparent, #00fff715, transparent)",
          animation: "scanline 4s linear infinite",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        {/* Corner decorations */}
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "1.5rem",
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            color: "#ffffffcc",
            animation: loaded ? "slideUp 0.8s ease forwards" : "none",
            opacity: loaded ? 1 : 0,
          }}
        >
          {">"} sys boot v0.0.1
          <br />
          {">"} status: building stuff...
          <br />
          {">"} bugs squashed: 3 out of &infin;
          <br />
          {">"} eta: soon-ish&trade;
        </div>

        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            color: "#ffffffcc",
            textAlign: "right",
            animation: loaded ? "slideUp 0.8s ease 0.2s forwards" : "none",
            opacity: loaded ? 1 : 0,
          }}
        >
          .bot domain: yep, it's ours
          <br />
          progress: ████░░ almost
          <br />
          ai modules: loading...
          <br />
          coffee left: ░░░░░░ uh oh
        </div>

        {/* Main WTFAI letters */}
        <div
          style={{
            display: "flex",
            gap: "clamp(0.5rem, 3vw, 2rem)",
            animation: loaded
              ? "popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
              : "none",
            opacity: loaded ? 1 : 0,
          }}
        >
          {letters.map(({ letter, word, color }, i) => (
            <div
              key={letter + i}
              onMouseEnter={() => setHoverLetter(i)}
              onMouseLeave={() => setHoverLetter(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "default",
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform:
                  hoverLetter === i
                    ? "scale(1.15) translateY(-8px)"
                    : "scale(1)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(4rem, 15vw, 10rem)",
                  fontWeight: 800,
                  color: color,
                  lineHeight: 1,
                  animation:
                    hoverLetter === i
                      ? "glitchColor 0.3s linear infinite"
                      : `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                  textShadow: `0 0 40px ${color}40, 0 0 80px ${color}20`,
                  transition: "text-shadow 0.3s",
                  ...(hoverLetter === i && {
                    textShadow: `0 0 60px ${color}80, 0 0 120px ${color}40, 4px 0 ${color}, -4px 0 #00fff7`,
                  }),
                }}
              >
                {letter}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "clamp(0.85rem, 2.2vw, 1.2rem)",
                  color: `${color}aa`,
                  marginTop: "0.5rem",
                  height: "1.2em",
                  transition: "all 0.4s ease",
                  opacity: 1,
                  letterSpacing: "0.05em",
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* .bot badge */}
        <div
          onClick={handleBotClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1.5rem",
            border: "1px solid #00fff730",
            borderRadius: "100px",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.9rem",
            color: "#00fff7",
            background: "#00fff708",
            cursor: "pointer",
            animation: loaded
              ? "slideUp 0.6s ease 0.3s forwards, wobble 4s ease-in-out 1s infinite"
              : "none",
            opacity: loaded ? 1 : 0,
            transition: "all 0.3s",
            userSelect: "none",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#00fff715";
            e.currentTarget.style.borderColor = "#00fff760";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#00fff708";
            e.currentTarget.style.borderColor = "#00fff730";
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>{"\u{1F916}"}</span>
          .bot
          {easterEgg && (
            <span
              style={{
                fontSize: "0.7rem",
                color: "#ff00ea",
                transition: "all 0.3s",
              }}
            >
              {" "}
              {getBotMessage()}
            </span>
          )}
        </div>

        {/* Under Construction banner */}
        <div
          style={{
            position: "relative",
            padding: "1.5rem 3rem",
            background:
              "linear-gradient(135deg, #ff00ea15, #00fff710, #ffcc0010)",
            border: "1px solid #ffffff10",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "600px",
            animation: loaded ? "slideUp 0.6s ease 0.5s forwards" : "none",
            opacity: loaded ? 1 : 0,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#0a0a0f",
              padding: "0 1rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#ffcc00",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {"\u{1F6A7}"} Under Construction {"\u{1F6A7}"}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 700,
              marginBottom: "0.75rem",
              background: "linear-gradient(90deg, #ff00ea, #00fff7, #ffcc00)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We're cooking something up
          </h2>
        </div>

        {/* Rotating fun facts */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.85rem",
            color: "#ffffffcc",
            maxWidth: "700px",
            textAlign: "left",
            lineHeight: 1.5,
            minHeight: "3em",
            display: "flex",
            alignItems: "center",
            animation: loaded ? "slideUp 0.6s ease 0.7s forwards" : "none",
            opacity: loaded ? 1 : 0,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0,
              alignSelf: "flex-start",
              marginTop: "2px",
            }}
          >
            {"\u{1F4C1}"}
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00fff7",
                animation: "blink 1.2s step-end infinite",
                boxShadow: "0 0 6px #00fff7",
              }}
            />
          </span>
          {(() => {
            const text = funFacts[factIndex].replace("\u{1F4C1} ", "");
            const colonIdx = text.indexOf(": ");
            const label = text.slice(0, colonIdx + 1);
            const body = text.slice(colonIdx + 2);
            return (
              <span style={{ marginLeft: "10px", display: "inline" }}>
                <span style={{ color: "#00fff7", whiteSpace: "nowrap" }}>
                  {label}
                </span>{" "}
                <span>{body}</span>
              </span>
            );
          })()}
        </div>

        {/* Email signup teaser */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            animation: loaded ? "slideUp 0.6s ease 0.9s forwards" : "none",
            opacity: loaded ? 1 : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "0.7rem 1.5rem",
                background: "linear-gradient(135deg, #ff00ea30, #ff00ea10)",
                border: "1px solid #ff00ea40",
                borderRadius: "8px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                color: "#ff00ea",
                cursor: "not-allowed",
                opacity: 0.7,
                userSelect: "none",
              }}
            >
              hey, tell me when this launches &rarr;
            </div>
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "#ffffffaa",
            }}
          >
            (dropping soon, pinky promise {"\u{1F919}"})
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              color: "#ffffff80",
              marginTop: "0.25rem",
            }}
          >
            (yeah we said that last month too)
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            opacity: 0,
            animation: loaded ? "slideUp 0.6s ease 1.1s forwards" : "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "#ffffffaa",
              textAlign: "center",
            }}
          >
            wtfai.bot &copy; {new Date().getFullYear()} &bull; built with{" "}
            {"\u{1F916}"}, too much caffeine, and questionable life choices
          </div>
        </div>
      </div>
    </div>
  );
}
