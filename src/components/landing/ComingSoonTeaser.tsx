'use client';
import { Calculator, ScanLine, Sparkles, Workflow, type LucideIcon } from 'lucide-react';

type Item = {
  icon: LucideIcon;
  badge: string;
  title: string;
  text: string;
};

const ITEMS: Item[] = [
  {
    icon: Workflow,
    badge: 'SP Truck · Próximamente',
    title: 'Optimizador de recursos y albaranes',
    text: 'SP Suite propondrá la mejor combinación de vehículos, conductores y rutas para cada albarán. Dejas de decidir a mano cada mañana.',
  },
  {
    icon: ScanLine,
    badge: 'Todos los módulos · Próximamente',
    title: 'Lectura automática de facturas',
    text: 'Las facturas de proveedor se leen solas y entran al circuito. Se acabó teclear importes, conceptos y bases imponibles.',
  },
  {
    icon: Calculator,
    badge: 'Próximamente',
    title: 'Contabilidad Solport',
    text: 'El módulo contable de SP Suite. De la operativa al asiento y del asiento al balance, sin pasar por un sistema externo.',
  },
];

export function ComingSoonTeaser() {
  return (
    <section
      id="proximamente"
      className="relative overflow-hidden bg-[#0b263a] px-4 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[#9fc778] blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6rem] h-80 w-80 rounded-full bg-[#29677c] blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dde89f]">
            <Sparkles size={12} /> Próximamente
          </p>
          <h2
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: "'Exo Soft','Exo 2',sans-serif" }}
          >
            Lo que está <span className="text-[#9fc778]">a punto de llegar</span> a SP Suite
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            Tres piezas en las que estamos trabajando ahora mismo. Las verás aterrizar en SP Suite
            antes de que te enteres.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-[#9fc778]/45 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: 'rgba(159,199,120,0.18)', color: '#9fc778' }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="rounded-full border border-[#9fc778]/40 bg-[#9fc778]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#dde89f]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
