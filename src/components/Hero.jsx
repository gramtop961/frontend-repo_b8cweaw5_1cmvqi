import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Brain, Code, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[86vh] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
          >
            <Rocket className="h-3.5 w-3.5 text-white/90" />
            Full‑Stack Developer • AI Enthusiast
          </motion.div>

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Building intelligent, delightful products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            I craft fast web experiences end‑to‑end and explore AI to enhance real‑world workflows — from prototypes to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-fuchsia-500/30 transition hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            <Badge icon={Code} label="React • Node • Python" />
            <Badge icon={Brain} label="LLMs • RAG • Agents" />
            <Badge icon={Rocket} label="Ship fast, iterate" className="hidden sm:flex" />
          </motion.div>

          <div className="pointer-events-none absolute -z-[0]" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur-md ${className}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </div>
  );
}
