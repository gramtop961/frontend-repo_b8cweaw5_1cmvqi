import { motion } from 'framer-motion';
import { ExternalLink, Code, Brain, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'AI Support Agent',
    desc: 'Retrieval‑augmented chatbot for docs with analytics and feedback loop.',
    stack: ['Next.js', 'FastAPI', 'Pinecone', 'OpenAI'],
    icon: Brain,
    url: '#',
    gradient: 'from-fuchsia-500/20 via-purple-500/20 to-blue-500/20',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming metrics, alerts, and anomaly detection for IoT devices.',
    stack: ['React', 'WebSockets', 'D3.js', 'Python'],
    icon: Rocket,
    url: '#',
    gradient: 'from-emerald-400/20 via-cyan-400/20 to-sky-500/20',
  },
  {
    title: 'Dev Tools Kit',
    desc: 'CLI + web suite for scaffolding, testing, and deployment automation.',
    stack: ['Node', 'Vite', 'Docker', 'GitHub Actions'],
    icon: Code,
    url: '#',
    gradient: 'from-amber-400/20 via-orange-500/20 to-rose-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 -z-[0] h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of work spanning product, platform, and AI.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Card key={p.title} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ p, idx }) {
  return (
    <motion.a
      href={p.url}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="group relative"
    >
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent">
        <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1">
          <div className={`pointer-events-none absolute -inset-20 bg-gradient-radial ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

          <div className="relative flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                <p.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-white/70">{p.desc}</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </div>

          <div className="relative mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
