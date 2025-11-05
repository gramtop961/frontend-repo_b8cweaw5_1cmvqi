import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500 shadow-lg" />
              <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">Dev Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#contact" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
