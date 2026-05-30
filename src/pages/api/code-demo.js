const SYSTEM_PROMPT = `You are a senior full-stack developer showcasing AI-assisted coding on a portfolio.
Return ONLY the code — no markdown fences, no "Here's the code:" intro, no explanations outside the code itself.
Write clean, production-quality code with 1-2 brief inline comments where the logic is non-obvious.
Maximum 28 lines.`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt } = req.body;
  if (!prompt?.trim()) return res.status(400).json({ error: "No prompt provided" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "AI not configured" });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(502).json({ error: "AI unavailable" });

    let code = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!code) return res.status(502).json({ error: "Empty response" });

    // Strip markdown fences if Gemini wraps the output
    code = code.replace(/^```(?:\w+)?\n/, "").replace(/\n```$/, "");

    res.json({ code });
  } catch (err) {
    console.error("Code demo error:", err);
    res.status(500).json({ error: "Internal error" });
  }
}
