function ProjectCard({ project, index }: any) {
    return (
        <div
            className={`group relative rounded-[2.5rem] overflow-hidden border border-white/8 bg-[var(--color-card)] min-h-[620px] transition-all duration-700 hover:-translate-y-3 ${index === 1 ? "lg:-mt-10" : ""
                }`}
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            {/* Dynamic Gradient Layer */}
            <div
                className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                style={{
                    background: `
                        radial-gradient(circle at top right, ${project.color}35, transparent 35%),
                        radial-gradient(circle at bottom left, ${project.color}15, transparent 40%)
                    `,
                }}
            />

            {/* Top Hero Visual */}
            <div className="relative h-[300px] overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(145deg, ${project.bg}, #09090c)`,
                    }}
                />

                {/* Giant Number */}
                <div className="absolute top-7 left-7 text-[120px] font-black leading-none text-white/[0.03]">
                    {project.num}
                </div>

                {/* Floating Device Frame */}
                <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="relative w-full max-w-[290px] h-[190px] rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-700">
                        {/* Browser Header */}
                        <div className="h-10 border-b border-white/5 flex items-center justify-between px-4">
                            <div className="flex gap-2">
                                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                                    <span
                                        key={i}
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ background: c }}
                                    />
                                ))}
                            </div>
                            <div className="w-20 h-2 rounded-full bg-white/10" />
                        </div>

                        {/* Fake Product Layout */}
                        <div className="p-4 flex flex-col gap-4">
                            <div className="space-y-2">
                                <div className="h-3 rounded-full bg-white/10 w-3/4" />
                                <div className="h-3 rounded-full bg-white/5 w-1/2" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    className="h-16 rounded-2xl border border-white/5"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                                    }}
                                />
                                <div className="h-16 rounded-2xl bg-white/[0.03]" />
                            </div>

                            <div className="h-10 rounded-xl bg-white/[0.04]" />
                        </div>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-[10px] tracking-[0.35em] uppercase text-white/75 font-mono">
                    {project.category}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative p-8 flex flex-col">
                {/* Title + Arrow */}
                <div className="flex justify-between items-start gap-4 mb-5">
                    <div>
                        <h3 className="text-3xl font-bold leading-tight mb-2 group-hover:text-[var(--color-lime)] transition-colors duration-500">
                            {project.title}
                        </h3>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm">
                            {project.desc}
                        </p>
                    </div>

                    <button className="w-14 h-14 rounded-2xl shrink-0 border border-white/10 bg-white/[0.03] flex items-center justify-center text-xl group-hover:bg-[var(--color-lime)] group-hover:text-black group-hover:rotate-45 transition-all duration-500">
                        ↗
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 my-6" />

                {/* Project Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-7">
                    {project.stats.map((stat: any) => (
                        <div key={stat.label}>
                            <div className="text-lg font-semibold">
                                {stat.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)] mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-4 py-2 rounded-full text-xs border border-white/8 bg-white/[0.025] text-[#d6d6d6] hover:border-white/20 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = [
        {
            num: "01",
            title: "Vextor IDE",
            category: "DEVELOPER PLATFORM",
            desc: "A modern browser-based IDE ecosystem crafted for speed, focus, and powerful coding workflows.",
            tags: ["React", "Monaco", "Node.js", "WebSockets"],
            stats: [
                { value: "98%", label: "Performance" },
                { value: "4x", label: "Workflow" },
                { value: "24/7", label: "Cloud Sync" },
            ],
            bg: "#0f172a",
            color: "#84ff00",
        },
        {
            num: "02",
            title: "Nexa Commerce",
            category: "E-COMMERCE",
            desc: "A luxury digital commerce ecosystem with immersive UX, conversion systems, and scalable architecture.",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            stats: [
                { value: "3.2x", label: "Sales" },
                { value: "89%", label: "Retention" },
                { value: "1.9s", label: "Load" },
            ],
            bg: "#111827",
            color: "#00e5ff",
        },
        {
            num: "03",
            title: "AI Vision",
            category: "COMPUTER VISION",
            desc: "Real-time intelligent object detection dashboard integrating machine learning with responsive interfaces.",
            tags: ["Python", "TensorFlow", "OpenCV"],
            stats: [
                { value: "95%", label: "Accuracy" },
                { value: "60FPS", label: "Realtime" },
                { value: "AI", label: "Powered" },
            ],
            bg: "#1a1020",
            color: "#ff4ecd",
        },
    ];

    return (
        <section
            id="projects"
            className="relative py-32 border-t border-[var(--color-border)] overflow-hidden"
        >
            {/* Massive Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[var(--color-lime)]/5 blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/5 blur-[180px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="mb-24">
                    <div className="section-num mb-6">
                        02 · SELECTED DIGITAL EXPERIENCES
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                                Engineered
                                <br />
                                To Impress
                            </h2>
                        </div>

                        <p className="max-w-xl text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
                            Every project is designed as a premium digital
                            experience — blending aesthetic precision,
                            engineering excellence, and product strategy into
                            memorable systems.
                        </p>
                    </div>
                </div>

                {/* Staggered Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.num}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-10">
                    <p className="text-sm tracking-[0.25em] uppercase text-[var(--color-muted)]">
                        More products. More innovation. More impact.
                    </p>

                    <a
                        href="#"
                        className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:border-[var(--color-lime)]/40 transition-all duration-500"
                    >
                        <span className="text-sm font-medium uppercase tracking-[0.3em]">
                            Explore Full Portfolio
                        </span>
                        <span className="w-10 h-10 rounded-full bg-[var(--color-lime)] text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                            ↗
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}