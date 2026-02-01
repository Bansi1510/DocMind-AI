"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative transition-colors duration-200
        ${isActive
          ? "text-red-500 font-semibold"
          : "text-muted-foreground hover:text-foreground"
        }
      `}
    >
      {children}

      {/* underline animation */}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
};

export default NavLink;
