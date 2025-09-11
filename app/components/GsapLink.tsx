// components/GsapLink.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "./TransitionContext";
import Link from "next/link";

export default function GsapLink({
  classes,
  href,
  children,
}: {
  classes?: string;
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { playTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === href) return;

    playTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={`${href.includes("projects/") ? `bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit ${classes ? classes : "absolute bottom-6"}` : "!py-3 !px-5 transition-all hover-text"}`}>
      {children}
    </Link>
  );
}
