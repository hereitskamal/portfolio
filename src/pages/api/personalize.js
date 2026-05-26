const TYPE_CONTEXT = {
  recruiter: "a talent recruiter looking to hire a senior full-stack developer",
  hr: "an HR professional evaluating culture fit and team collaboration",
  developer: "a fellow software developer interested in technical work and stack",
  client: "a potential client who needs a web application built end-to-end",
  visitor: "a curious visitor exploring the portfolio with no specific agenda",
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { visitorType, visitorName } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return res.status(500).json({ greeting: null });

  const context = TYPE_CONTEXT[visitorType] || TYPE_CONTEXT.visitor;
  const nameClause = visitorName ? `Their name is ${visitorName}. Use it naturally in the greeting.` : "";

  const prompt = `Write a single personalized greeting line (max 14 words) for ${context} visiting Kamal Sharma's developer portfolio.
${nameClause}

About Kamal: Senior Full Stack Developer, 5+ years, React/Next.js/TypeScript/Node.js, currently building LegalTech for Thomson Reuters at Galaxy Weblinks, based in Bengaluru, India.

Rules:
- Max 14 words
- Include the visitor's name naturally if provided
- No quotes, no labels, no trailing punctuation
- Fresh every time (seed: ${Math.random().toFixed(8)})
- Confident, memorable, tailored to their role
- Sometimes bold, sometimes warm, sometimes clever

Return ONLY the greeting line.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 1.0, maxOutputTokens: 40 },
        }),
      }
    );

    const data = await response.json();
    const greeting = data.candidates?.[0]?.content?.parts?.[0]?.text
      ?.trim()
      ?.replace(/^["']|["']$/g, ""); // strip any quotes Gemini might add

    res.json({ greeting: greeting || null });
  } catch {
    res.json({ greeting: null });
  }
}
