import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build something intelligent</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Open to freelance, collaborations, or full‑time roles. Drop a line and I’ll get back within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-fuchsia-500/30 transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">UTC±0 • Remote‑friendly</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Response time: <strong className="text-white/80">24h</strong></span>
            </div>

            <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
