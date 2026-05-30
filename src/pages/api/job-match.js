const KAMAL_PROFILE = `
Name: Kamal Sharma
Title: Senior Full Stack Developer | MERN Stack Expert
Experience: 5+ years

SKILLS:
Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, React Native, PWA
Backend: Node.js, Express.js, RESTful APIs, GraphQL, Microservices, SSR
Databases & Cloud: MongoDB, AWS S3, Azure, AWS EC2, Docker, Kubernetes, CI/CD
UI/UX: Tailwind CSS, Bootstrap, Material UI, Styled Components, Framer Motion, Figma, Adobe XD
Libraries: Redux, React Router, Axios, OAuth 2.0, JWT, Storybook
Methodologies: Agile, Scrum, TDD, Code Reviews, Pair Programming

EXPERIENCE:
1. Senior Frontend Engineer @ Galaxy Weblinks (Nov 2025–Present)
   - Migrating Law Firm Management platform in Next.js for Thomson Reuters
   - Built Boat booking software using Next.js, Tailwind CSS, ShadCN

2. Senior Frontend Developer @ Squadra Media (Oct 2024–Oct 2025)
   - Architected LMS platform (React, TypeScript, GraphQL) serving 5,000+ users, 99.9% uptime
   - Built marketing site with Next.js and Framer Motion — 95+ Lighthouse score, 40% faster loads
   - Led 3-person frontend team; CI/CD pipelines cut deployment time by 60%

3. MERN Stack Developer @ Insignia Consultancy Solutions (Jan 2023–Oct 2024)
   - E-commerce features supporting 500+ daily transactions
   - 50+ reusable Storybook components across 8 projects, reducing dev time 30%
   - Universal dashboard with real-time analytics for 10+ stakeholders

4. Web Developer @ VJ Smart Living (Feb 2021–Jan 2023)
   - IoT device dashboard controlling 80+ devices, 98% user satisfaction
   - CRM/ERP system for 200+ users, reduced manual workflows 70%
   - WebSocket automation cut response times by 80%

LOCATION: Bengaluru, India (open to remote and relocation)
AVAILABILITY: Open to senior full-stack, frontend, or engineering lead roles
`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { jobDescription } = req.body;
  if (!jobDescription?.trim()) {
    return res.status(400).json({ error: "No job description provided" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "AI service not configured" });

  const prompt = `Analyze this job description against the candidate profile. Return ONLY valid JSON — no markdown fences, no extra text. Use exactly this structure:
{"score":<integer 0-100 reflecting true fit>,"matchedSkills":[<up to 8 specific skill strings that match>],"pitch":"<3 compelling first-person sentences Kamal would say to this employer>"}

CANDIDATE PROFILE:
${KAMAL_PROFILE}

JOB DESCRIPTION:
${jobDescription.slice(0, 3000)}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.5, maxOutputTokens: 400 },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(502).json({ error: "AI service unavailable" });

    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!rawText) return res.status(502).json({ error: "Empty response from AI" });

    const jsonText = rawText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    const result = JSON.parse(jsonText);

    res.json(result);
  } catch (err) {
    console.error("Job match error:", err);
    res.status(500).json({ error: "Failed to analyze job description" });
  }
}
