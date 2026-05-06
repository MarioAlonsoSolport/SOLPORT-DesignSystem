import { ArrowRight, Sparkles } from 'lucide-react';

export function AliciaTeaser() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-5xl">
        <a
          href="/alicia"
          className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-[#f4bcd0]/40 bg-[linear-gradient(120deg,#113e61_0%,#29677c_55%,#b8446a_130%)] p-8 text-white shadow-[0_20px_50px_rgba(17,62,97,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(184,68,106,0.35)] md:flex-row md:items-center md:gap-10 md:p-10"
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f4bcd0]/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-8 left-1/3 h-32 w-32 rounded-full bg-[#9fc778]/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f4bcd0]/50 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4bcd0]">
              <Sparkles size={12} /> Novedad · AlicIA
            </span>
            <h2
              className="mt-3 text-2xl font-bold leading-tight md:text-3xl"
              style={{ fontFamily: "'Exo Soft','Exo 2',sans-serif" }}
            >
              Inteligencia artificial para logística internacional, dentro de SP Suite.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Redacta, traduce, resume, consulta y predice sin salir del expediente. AlicIA es el
              copiloto de Solport, incluido en SP Suite.
            </p>
          </div>
          <div className="relative shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all group-hover:bg-white/20">
              Descubrir AlicIA
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
