export const projectsData = [
    {
        slug: "vextor-ai",
        title: "Vextor AI",
        type: "Integrated Development Environment",
        role: "Lead Architect",
        timeline: "2025 — Present (FYP)",
        stack: ["Electron.js", "React.js", "Rust", "Go", "Tailwind"],
        overview: "A completely custom-built IDE engineered to solve modern coding constraints. Unlike Antigravity or Cursor, Vextor is a ground-up architecture, not a VS Code fork.",
        challenge: "Standard IDEs and their AI extensions are heavily bloated and generally limited to catching simple syntax errors. Junior-to-mid level developers often struggle more with deep, architectural logical errors across complex codebases.",
        solution: "Architected a custom native shell using Electron and React, driven by ultra-fast Rust and Go backend processes. By deeply integrating a custom Language Server Protocol (LSP), the system actively monitors the workspace to proactively detect, analyze, and resolve complex logical errors in real-time.",
        liveUrl: "https://vextor.vercel.app",
        nextProject: "lenmi-store",
        nextProjectName: "Lenmi Store"
    },
    {
        slug: "lenmi-store",
        title: "Lenmi Store",
        type: "E-Commerce Architecture",
        role: "Full-Stack Developer",
        timeline: "2024",
        stack: ["Next.js", "MongoDB", "Cloudinary", "Shadcn UI", "JWT"],
        overview: "A comprehensive, high-performance online shopping infrastructure built from the ground up as a personal deployment to handle modern commerce flows.",
        challenge: "Building a secure, performant digital storefront requires handling complex state synchronization, secure user authentication, and optimized media delivery without compromising on client-side rendering speeds.",
        solution: "Developed a robust Next.js frontend utilizing Shadcn UI and Tailwind CSS for a pristine user experience. The backend utilizes MongoDB for flexible data storage, bcrypt and JWT for secure stateless authentication, and Cloudinary pipelines for optimized, dynamic media asset delivery.",
        liveUrl: "https://lenmi-store.vercel.app",
        nextProject: "echoup",
        nextProjectName: "EchoUp"
    },
    {
        slug: "echoup",
        title: "EchoUp",
        type: "AI Social Platform",
        role: "Full-Stack & AI Engineer",
        timeline: "In Development",
        stack: ["Next.js", "PostgreSQL", "Redis", "Prisma ORM", "NextAuth"],
        overview: "A next-generation web social media platform currently in active development, integrating native AI features to fundamentally enhance user interaction and content curation.",
        challenge: "Modern social platforms require immense data throughput, rapid caching, and secure relational data mapping, alongside the heavy computational overhead of embedding real-time AI processing capabilities.",
        solution: "Architecting a high-performance relational database schema using PostgreSQL and Prisma ORM, backed by Redis for ultra-fast data caching. Integrating NextAuth for seamless security protocols while simultaneously developing custom, built-in AI modules to intelligently curate the social feed.",
        liveUrl: "https://echoup.vercel.app",
        nextProject: "vextor-ai",
        nextProjectName: "Vextor AI"
    }
];