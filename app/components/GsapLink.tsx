// components/GsapLink.tsx
"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "./TransitionContext";
import Link from "next/link";

export default function GsapLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { playTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} className='!py-3 !px-5 transition-all hover-text'>
      {children}
    </Link>
  );
}
