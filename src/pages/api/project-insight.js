const PROJECT_DATA = {
  "Gaia Trails": {
    description: "Full-stack travel and trail discovery platform with admin and client views",
    stack: "Next.js, Tailwind CSS, Node.js API routes, full-stack",
    decisions:
      "Chose Next.js for SSR performance and SEO on trail discovery pages. Used Tailwind for rapid UI iteration across both the client-facing app and admin panel.",
    challenges:
      "Handling nested route structures for trails, destinations, and bookings while keeping admin and client surfaces cleanly separated.",
  },
  "The Earthy Touch": {
    description: "E-commerce platform for handcrafted interior artifacts",
    stack: "Next.js, Supabase (PostgreSQL), Tailwind CSS, full-stack with admin dashboard",
    decisions:
      "Picked Supabase for real-time inventory sync and built-in auth. Next.js API routes handle checkout and order logic serverlessly.",
    challenges:
      "Building a live admin dashboard alongside the storefront with consistent real-time inventory state across both surfaces.",
  },
  "AI Resume Analyser": {
    description: "AI-powered resume feedback tool with detailed improvement suggestions",
    stack: "Next.js, MongoDB, OpenAI API, TypeScript",
    decisions:
      "Used OpenAI for nuanced NLP resume analysis. MongoDB stores analysis history so returning users can compare versions. TypeScript enforced strict typing on resume parse output.",
    challenges:
      "Reliably parsing varied PDF formats into structured text, and engineering prompts that produce actionable rather than generic feedback.",
  },
  "Chatbot Builder": {
    description: "Visual drag-and-drop interface for building conversational flows",
    stack: "Next.js, React Flow, TypeScript, Tailwind CSS",
    decisions:
      "React Flow was ideal for the node-based visual editor. TypeScript enforced strict node/edge typing across the flow graph, catching shape mismatches at compile time.",
    challenges:
      "Serializing and deserialising complex flow graphs reliably to JSON, and managing deeply nested conversation branch state without performance issues.",
  },
  FinoTrack: {
    description: "Personal finance management PWA with expense tracking and insights",
    stack: "Next.js, Supabase (PostgreSQL), Tailwind CSS, PWA with service worker",
    decisions:
      "PWA approach gave mobile-native feel without React Native overhead. Supabase provided a serverless backend with row-level security for per-user data isolation.",
    challenges:
      "Designing the service worker caching strategy — balancing fresh financial data against offline functionality when connectivity drops.",
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { projectName, question } = req.body;
  if (!projectName || !question?.trim()) {
    return res.status(400).json({ error: "Missing project or question" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "AI not configured" });

  const project = PROJECT_DATA[projectName];
  if (!project) return res.status(404).json({ error: "Project not found" });

  const systemPrompt = `You are Kamal Sharma's AI assistant answering questions about one of his projects.
Be specific, technical, and candid. Respond in 2-4 sentences from Kamal's perspective (first person).

PROJECT: ${projectName}
DESCRIPTION: ${project.description}
STACK: ${project.stack}
KEY DECISIONS: ${project.decisions}
MAIN CHALLENGES: ${project.challenges}

About Kamal: Senior Full Stack Developer, 5+ years, specialising in React, Next.js, TypeScript, and Node.js.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 220 },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(502).json({ error: "AI unavailable" });

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!answer) return res.status(502).json({ error: "Empty response" });

    res.json({ answer });
  } catch (err) {
    console.error("Project insight error:", err);
    res.status(500).json({ error: "Internal error" });
  }
}
