function ProjectCard({ num, title, desc, tags, bgColor, delay }: any) {
    return (
        <div
            className="proj-card rounded-xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)]"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="relative h-[180px] overflow-hidden" style={{ backgroundColor: bgColor }}>
                <div className="absolute top-3 left-3 font-mono text-xs text-white/40">{num}</div>

                {/* Flat Mock UI Representation */}
                <div className="absolute inset-4 rounded-lg bg-black/40 border border-white/5 overflow-hidden">
                    <div className="flex items-center gap-2 px-3 h-6 bg-black/40 border-b border-white/5">
                        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                            <div key={i} className="w-[7px] h-[7px] rounded-full" style={{ background: c }} />
                        ))}
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <div className="h-2 w-[70%] rounded-sm bg-white/10" />
                        <div className="h-8 rounded-md bg-white/5 mt-1" />
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base text-white">{title}</h3>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-[var(--color-lime)] text-black font-bold text-sm shrink-0">
                        ↗
                    </button>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((t: string) => <span key={t} className="tag-pill">{t}</span>)}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = [
        { num: '01', title: 'Nexa — SaaS Dashboard', desc: 'A modern dashboard for SaaS products.', tags: ['React', 'Tailwind CSS'], bgColor: '#14141a', delay: 0 },
        { num: '02', title: 'Wanderlust — Travel', desc: 'A responsive travel website with clean UI.', tags: ['Next.js', 'Tailwind CSS'], bgColor: '#101a14', delay: 0.1 },
        { num: '03', title: 'DevSphere — Blog', desc: 'A blogging platform for developers.', tags: ['Next.js', 'MongoDB'], bgColor: '#1a101a', delay: 0.2 },
    ];

    return (
        <section id="projects" className="py-24 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-end justify-between mb-14">
                    <div>
                        <div className="section-num mb-3">02 · FEATURED WORKS</div>
                        <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight">
                            Some things<br />I've built
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-white font-sans text-sm font-medium transition-colors hover:text-[var(--color-lime)] hover:border-[var(--color-lime)]">
                        VIEW ALL PROJECTS
                        <span className="inline-block -rotate-45">↗</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((p, i) => <ProjectCard key={p.num} {...p} delay={i * 0.1} />)}
                </div>
            </div>
        </section>
    );
}