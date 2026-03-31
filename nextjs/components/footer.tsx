'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function CETClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Madrid',
        }),
      );
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <p className="text-sm text-slate-400">Currently {time} CET · Async-first · Responses within 4 business hours</p>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-bold text-white">RealAd</p>
            <p className="mt-2 text-sm text-slate-400">Infrastructure partner for startups.</p>
            <a
              href="mailto:hello@realad.io"
              className="mt-4 block text-sm text-slate-400 hover:text-white transition-colors"
            >
              hello@realad.io
            </a>
            <div className="mt-2">
              <CETClock />
            </div>
            <p className="mt-2 text-sm text-slate-500">EUR and USD accepted</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#rescue" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Infrastructure Rescue
                </Link>
              </li>
              <li>
                <Link href="/services#compliance" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Compliance Acceleration
                </Link>
              </li>
              <li>
                <Link
                  href="/services#partnership"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Infrastructure Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} RealAd. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/kochuraa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/realad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
