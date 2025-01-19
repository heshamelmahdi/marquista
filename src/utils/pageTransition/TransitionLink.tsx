"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    navbar?.classList.add("nav-transition");
    body?.classList.add("page-transition");
    await sleep(500);

    router.push(href);

    await sleep(500);
    body?.classList.remove("page-transition");

    await sleep(600);
    navbar?.classList.remove("nav-transition");
  };
  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
export default TransitionLink;
