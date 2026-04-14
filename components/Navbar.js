"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
        <span>Home</span>
      </Link>

      <Link href="/tasks" className={`nav-link ${pathname === "/tasks" ? "active" : ""}`}>
        <span>Tasks</span>
      </Link>

      <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
        <span>About</span>
      </Link>
    </nav>
  );
}