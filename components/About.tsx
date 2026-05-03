export default function About() {
    return (
        <section id="about" className="py-24 border-t border-[var(--color-border)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Left Side */}
                <div>
                    <div className="section-num mb-3">04 · ABOUT ME</div>
                    <h2 className="font-mono font-bold text-3xl md:text-4xl leading-snug mb-6">
                        I'm a developer<br />
                        who loves turning<br />
                        ideas into <span className="text-[var(--color-lime)] underline decoration-wavy underline-offset-4">reality</span>.
                    </h2>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-[400px] font-light">
                        I enjoy building beautiful and functional web experiences. When I'm not coding, you'll find me exploring new tech, playing games or capturing moments.
                    </p>
                    <div className="mt-10">
                        <a href="#contact" className="btn-lime inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-bold tracking-wide">
                            LET'S CONNECT
                            <span className="inline-block -rotate-45 text-base">↗</span>
                        </a>
                    </div>
                </div>

                {/* Right Side - Flat Illustration */}
                <div className="relative h-[420px] flex items-center justify-center">
                    {/* Flat Background Circle */}
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-purple)]/30 bg-[var(--color-purple)]/5 bottom-5" />

                    {/* Typography Element */}
                    <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 text-center z-10 font-sans font-bold text-2xl leading-snug">
                        <div className="text-white">Code.</div>
                        <div className="text-white">Create.</div>
                        <div className="text-[var(--color-lime)]">Inspire.</div>
                    </div>

                    {/* Dotted Orbit */}
                    <div className="absolute w-[250px] h-[250px] rounded-full border-[1.5px] border-dashed border-white/10 top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2" />

                    {/* Paper Plane */}
                    <div className="orbit-1 absolute top-[calc(50%-125px)] left-[calc(55%-125px)] origin-[125px_125px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-lime)">
                            <path d="M2 12L22 2L12 22L10 14L2 12Z" />
                        </svg>
                    </div>

                    {/* Dev Illustration Placeholder */}
                    <div className="relative z-20 text-center w-[180px] h-[240px] mx-auto mt-20">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[200px]">
                            {/* Body */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[140px] bg-[#1a1a1a] rounded-t-lg border border-[#333]" />
                            {/* Head */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55px] h-[60px] bg-[#2a1a0a] rounded-[50%_50%_40%_40%] border border-[#444]">
                                {/* Glasses */}
                                <div className="absolute top-[35%] left-[10%] flex gap-1">
                                    <div className="w-4 h-3 rounded border-2 border-[#555] bg-blue-400/10" />
                                    <div className="w-4 h-3 rounded border-2 border-[#555] bg-blue-400/10" />
                                </div>
                                {/* Hair */}
                                <div className="absolute -top-2 left-[10%] right-[10%] h-5 bg-[#1a0a00] rounded-t-lg" />
                            </div>
                            {/* Laptop */}
                            <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[70px] h-[10px] bg-[#222] rounded-sm border border-[#444]">
                                <div className="absolute bottom-full left-0 w-[70px] h-[46px] bg-[#111] rounded-t border border-[#333] flex items-center justify-center">
                                    <div className="text-[var(--color-lime)] font-mono text-[10px] font-bold">&lt;/&gt;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}