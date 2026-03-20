export const projectsData = [
    {
        slug: "vextor",
        title: "Vextor IDE",
        type: "AI Infrastructure",
        role: "Lead Architect",
        timeline: "2025 — Present",
        stack: ["Electron.js", "React 18", "PyTorch", "C++", "llama.cpp"],
        overview: "A localized Integrated Development Environment engineered to bypass cloud dependency. It natively mounts offline PyTorch models directly on the user's machine.",
        challenge: "Modern coding assistants expose proprietary codebases to third-party servers and introduce inevitable network latency. The goal was to bring the intelligence entirely offline without sacrificing UI framerates.",
        solution: "I architected a dual-process system. The UI runs on a highly optimized React/Electron thread, while heavy LLM inference is pushed to a background C++ engine via llama.cpp, communicating through a custom IPC bridge.",
        nextProject: "lenmi-store",
        nextProjectName: "Lenmi Store"
    },
    {
        slug: "lenmi-store",
        title: "Lenmi Store",
        type: "E-Commerce",
        role: "Full Stack Developer",
        timeline: "2024",
        stack: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
        overview: "A highly scalable marketplace infrastructure. Features complex state management protocols to synchronize real-time inventory and highly secure authentication flows.",
        challenge: "Handling concurrent transactions and real-time inventory synchronization across thousands of active users without database locking or race conditions.",
        solution: "Implemented a robust Next.js frontend coupled with a Node.js/Express backend, utilizing MongoDB transactions and optimistic UI updates to ensure a flawless checkout pipeline.",
        nextProject: "context-bot",
        nextProjectName: "Context Bot"
    },
    {
        slug: "context-bot",
        title: "Context Bot",
        type: "NLP Microservice",
        role: "Backend Engineer",
        timeline: "2023",
        stack: ["Python", "FastAPI", "React.js", "Docker"],
        overview: "A decoupled 24/7 digital assistant. Isolates heavy Python-based natural language processing into an ultra-low latency backend microservice.",
        challenge: "Heavy NLP calculations in Python were blocking standard web server threads, causing unacceptable latency for end-users chatting with the bot.",
        solution: "Decoupled the architecture. The frontend is a lightweight React client that fires asynchronous requests to a containerized FastAPI Python microservice, entirely isolating the heavy NLP math.",
        nextProject: "vextor-ide",
        nextProjectName: "Vextor IDE"
    }
];