export default function Contact() {
    return (
        <section
            id="contact"
            className="relative h-[140vh] max-h-[900px] w-full overflow-hidden bg-[#0C0C0C]"
        >
            <div className="relative w-full container mx-auto">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute w-[70%] right-0"
                >
                    <source src="/illustration.webm" type="video/webm" />
                </video>


                {/* Left-heavy dark cinematic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,4,0.99)_0%,rgba(4,4,4,0.97)_26%,rgba(4,4,4,0.88)_42%,rgba(9,5,18,0.58)_64%,rgba(4,4,4,0.72)_100%)] opacity-50" />

                {/* Purple circular aura */}
                <div className="absolute right-[30%] top-[30%] -translate-y-1/2 w-[32vw] h-[32vw] rounded-full bg-[radial-gradient(circle,rgba(126,87,255,0.38)_0%,rgba(126,87,255,0.12)_45%,transparent_72%)] blur-xl" />

                {/* Bottom shadow */}
                {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black via-black/40 to-transparent" /> */}
            </div>

            {/* Main Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-10 flex items-center">
                <div className="max-w-2xl text-center lg:text-left">

                    {/* Section Number */}
                    <div className="section-num mb-4 block">
                        05 · CONTACT
                    </div>

                    {/* Heading */}
                    <h2 className="font-sans font-bold text-4xl md:text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-5 text-white">
                        Let&apos;s work{" "}
                        <br />
                        <span className="text-[var(--color-lime)] relative inline-block">
                            together.
                            <svg
                                className="absolute left-0 -bottom-2 w-full"
                                viewBox="0 0 220 18"
                                fill="none"
                            >
                                <path
                                    d="M4 14C48 4 98 2 216 10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed mb-10 max-w-[400px] mx-auto lg:mx-0">
                        Have a project in mind? I&apos;d love to help bring it to life.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-center lg:justify-start">
                        <a
                            href="mailto:aman@dev.com"
                            className="btn-lime group flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
                        >
                            SEND A MESSAGE
                            <span className="group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}