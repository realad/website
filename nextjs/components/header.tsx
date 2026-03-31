'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Case Studies' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          RealAd
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-slate-950 bg-teal-500 rounded-lg"
          >
            Book a Call
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-300 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base text-slate-300 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
