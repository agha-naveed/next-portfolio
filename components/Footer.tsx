export default function Footer() {
    return (
        <footer className="py-8 px-8 md:px-16 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono font-bold text-base text-white">
                <span className="text-[var(--color-lime)]">A</span>M
            </div>

            <span className="font-mono text-[10px] text-[#444] tracking-widest uppercase">
                © {new Date().getFullYear()} · AMAN · ALL RIGHTS RESERVED
            </span>

            <div className="flex gap-5">
                {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                    <a
                        key={s}
                        href="#"
                        className="text-[10px] text-[#444] tracking-widest font-mono uppercase transition-colors hover:text-[var(--color-lime)]"
                    >
                        {s}
                    </a>
                ))}
            </div>
        </footer>
    );
}