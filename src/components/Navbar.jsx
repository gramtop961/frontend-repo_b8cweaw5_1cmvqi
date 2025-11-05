import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'translate-y-0' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mt-4 rounded-2xl border bg-white/5 backdrop-blur-xl transition-all ${scrolled ? 'border-white/15 shadow-[0_10px_40px_-12px_rgba(99,102,241,0.35)]' : 'border-white/10'}`}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 [background:radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 relative">
              <a href="#home" className="group flex items-center gap-3">
                <div className="relative h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500 shadow-lg">
                  <div className="absolute inset-0 rounded-lg bg-white/10 mix-blend-overlay" />
                </div>
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
