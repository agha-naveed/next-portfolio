/* ── SVG ICONS ── */
const ReactIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="3" fill="#61dafb" /><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" /><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)" /></svg>;
const NextIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="14" fill="white" /><text x="9" y="21" fontFamily="Arial" fontWeight="900" fontSize="13" fill="black">N</text></svg>;
const TSIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8"><rect width="32" height="32" rx="4" fill="#3178C6" /><text x="5" y="22" fontFamily="Arial" fontWeight="900" fontSize="12" fill="white">TS</text></svg>;
const TailwindIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none"><path d="M16 7C12.5 7 10.5 8.75 9.5 12.25C11 10.5 12.75 9.875 14.75 10.375C15.875 10.656 16.656 11.438 17.531 12.313C18.969 13.75 20.656 15.438 24.25 15.438C27.75 15.438 29.75 13.688 30.75 10.188C29.25 11.938 27.5 12.563 25.5 12.063C24.375 11.781 23.594 11 22.719 10.125C21.281 8.688 19.594 7 16 7ZM9.5 15.438C6 15.438 4 17.188 3 20.688C4.5 18.938 6.25 18.313 8.25 18.813C9.375 19.094 10.156 19.875 11.031 20.75C12.469 22.188 14.156 23.875 17.75 23.875C21.25 23.875 23.25 22.125 24.25 18.625C22.75 20.375 21 21 19 20.5C17.875 20.219 17.094 19.438 16.219 18.563C14.781 17.125 13.094 15.438 9.5 15.438Z" fill="#38BDF8" /></svg>;
const NodeIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8"><rect width="32" height="32" rx="4" fill="#339933" /><path d="M16 5L27 11.5V24.5L16 31L5 24.5V11.5L16 5Z" fill="none" stroke="white" strokeWidth="1.5" /><text x="11" y="21" fontFamily="Arial" fontWeight="900" fontSize="9" fill="white">JS</text></svg>;
const DrizzleIcon = () => <svg viewBox="0 0 32 32" className="w-8 h-8"><rect width="32" height="32" rx="4" fill="#252525" /><path d="M16 8 L24 22 L8 22 Z" fill="#C5F74F" /><circle cx="16" cy="18" r="3" fill="#252525" /></svg>;

export default function Skills() {
    const techs = [
        { icon: <ReactIcon />, label: 'React' },
        { icon: <NextIcon />, label: 'Next.js' },
        { icon: <TSIcon />, label: 'TypeScript' },
        { icon: <TailwindIcon />, label: 'Tailwind CSS' },
        { icon: <NodeIcon />, label: 'Node.js' },
        { icon: <DrizzleIcon />, label: 'Drizzle ORM' },
    ];

    return (
        <section id="skills" className="py-24 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20 items-start">
                {/* Left Side: Progress */}
                <div>
                    <div className="section-num mb-3">03 · MY EXPERTISE</div>
                    <h2 className="font-sans font-bold text-4xl leading-tight">Skills &amp;<br />Technologies</h2>
                    <p className="mt-5 text-sm text-[var(--color-muted)] leading-relaxed font-light mb-8">
                        Tools and technologies I use to build fast, modern, and delightful digital products.
                    </p>

                    <div className="flex flex-col gap-4">
                        {[
                            ['Frontend Dev', '95'],
                            ['UI/UX Design', '80'],
                            ['Backend Dev', '72'],
                            ['Performance', '88']
                        ].map(([label, val]) => (
                            <div key={label}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-xs text-[#888] font-sans">{label}</span>
                                    <span className="text-[10px] font-mono text-[var(--color-lime)]">{val}%</span>
                                </div>
                                <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[var(--color-lime)] rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${val}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techs.map((t, i) => (
                        <div
                            key={t.label}
                            className="tech-card rounded-xl p-5 flex flex-col items-center gap-3 border border-[var(--color-border)] bg-[var(--color-card)]"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            {t.icon}
                            <span className="text-sm font-medium text-[#ccc] font-sans">{t.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}