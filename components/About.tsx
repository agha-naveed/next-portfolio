export default function About() {
    const stats = [
        { value: "50+", label: "Projects Built" },
        { value: "3+", label: "Years Learning" },
        { value: "10+", label: "Technologies" },
    ];

    return (
        <section
            id="about"
            className="py-32 border-t border-[var(--color-border)] relative overflow-hidden"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[8%] w-72 h-72 bg-[var(--color-lime)]/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-[var(--color-purple)]/10 blur-[160px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Heading */}
                <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                    <div>
                        <div className="section-num mb-4">04 · WHO I AM</div>

                        <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl">
                            Building{" "}
                            <span className="text-[var(--color-lime)]">
                                meaningful
                            </span>{" "}
                            digital
                            <br />
                            experiences through
                            <br />
                            code, design & innovation.
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                        I’m a full-stack developer passionate about crafting
                        high-performance websites, modern applications, and
                        immersive digital products that merge aesthetics with
                        functionality.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
                    {/* Left Side */}
                    <div className="space-y-8">
                        {/* Story Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
                                <div className="text-xs tracking-[0.3em] text-[var(--color-lime)] font-mono mb-4">
                                    DEVELOPMENT
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    From frontend precision to backend systems
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                                    I specialize in creating scalable web apps
                                    with clean architecture, polished UI, and
                                    seamless performance.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
                                <div className="text-xs tracking-[0.3em] text-[var(--color-lime)] font-mono mb-4">
                                    CREATIVE MINDSET
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    Designing experiences, not just interfaces
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                                    Every product I build balances usability,
                                    motion, and emotion to leave a lasting
                                    impression.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-lime)] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[var(--color-lime)] text-black font-semibold tracking-[0.15em] text-sm hover:scale-[1.03] transition-transform"
                            >
                                LET’S BUILD TOGETHER
                                <span className="text-lg">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Modern Identity Card */}
                    <div className="relative flex justify-center">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[380px] h-[380px] rounded-full border border-[var(--color-lime)]/20" />
                            <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-white/5 animate-spin-slow" />
                        </div>

                        {/* Main Card */}
                        <div className="relative w-full max-w-md rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] backdrop-blur-xl p-8 overflow-hidden">
                            {/* Decorative Top */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-xs tracking-[0.3em] text-[var(--color-muted)] mb-2">
                                        DIGITAL CREATOR
                                    </div>
                                    <div className="text-lg font-semibold">
                                        Agha Naveed
                                    </div>
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-[var(--color-lime)]/10 border border-[var(--color-lime)]/20 flex items-center justify-center text-[var(--color-lime)] font-mono text-lg">
                                    {"</>"}
                                </div>
                            </div>

                            {/* Philosophy */}
                            <div className="space-y-5">
                                <h3 className="text-3xl font-bold leading-tight">
                                    Code.
                                    <br />
                                    Design.
                                    <br />
                                    Scale.
                                </h3>

                                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                                    Focused on transforming ideas into
                                    impactful products with strategy,
                                    innovation, and technical excellence.
                                </p>
                            </div>

                            {/* Bottom Strip */}
                            <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex justify-between text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                                <span>Frontend</span>
                                <span>Backend</span>
                                <span>AI</span>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-lime)]/10 blur-2xl rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}