"use client";

import React from "react";
import Link from "next/link";
import { FiMenu, FiSearch, FiUser, FiLogIn } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5">
        {/* Left: Brand + Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <FiMenu className="h-5 w-5" />
          </button>
          <Link href="/" className="text-xl lg:text-2xl font-bold">
            <span className="text-gray-900">Tutors</span>
            <span className="text-yellow-500">Lab</span>
          </Link>
        </div>

        {/* Center: Search (always visible, responsive size) */}
        <form className="flex flex-1 items-center max-w-sm md:max-w-xl md:mx-6">
          <div className="relative w-full">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search tutors, subjects, or locations"
              className="w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />
          </div>
        </form>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
            aria-label="User account"
          >
            <FiUser className="h-5 w-5" />
          </Link>
          <Link
            href="/login"
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <FiLogIn className="h-4 w-4" /> Login
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <nav className="grid gap-2 text-sm">
            <Link href="#" className="rounded-md px-2 py-2 hover:bg-gray-50">
              Find Tutors
            </Link>
            <Link href="#" className="rounded-md px-2 py-2 hover:bg-gray-50">
              Become a Tutor
            </Link>
            <Link href="#" className="rounded-md px-2 py-2 hover:bg-gray-50">
              Subjects
            </Link>
            <Link href="#" className="rounded-md px-2 py-2 hover:bg-gray-50">
              Pricing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
