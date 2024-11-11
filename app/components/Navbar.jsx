"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/users" className={pathname === "/users" ? "active" : ""}>
        Users
      </Link>
      <Link href="/posts" className={pathname === "/posts" ? "active" : ""}>
        Posts
      </Link>
    </nav>
  );
}
