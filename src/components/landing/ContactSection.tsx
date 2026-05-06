'use client';

import {
  ArrowRight,
  Building2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from 'lucide-react';

import { CONTACT_MAILTO, LINKEDIN_URL, SOLPORT_MODULES_URL } from './brand';

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#113e61] px-4 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>
      <div className="contact-section-grid relative mx-auto grid w-full max-w-6xl gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dde89f]">
            <Mail size={12} /> Hablemos
          </p>
          <h2
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: "'Exo Soft','Exo 2',sans-serif" }}
          >
            Cuéntanos tu operativa. <span className="text-[#9fc778]">Te preparamos una demo</span>{' '}
            sobre tu día a día.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Sin presentaciones genéricas. Adaptamos la demo a tu sector, al tamaño de tu empresa y a
            los escenarios típicos de tu día a día.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_MAILTO}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-[#9fc778]/40 bg-[linear-gradient(135deg,#9fc778_0%,#dde89f_55%,#9fc778_110%)] px-7 py-3 text-sm font-bold text-[#113e61] shadow-[0_16px_40px_rgba(159,199,120,0.45)] transition-all before:absolute before:inset-y-0 before:left-[-30%] before:w-1/3 before:skew-x-[-22deg] before:bg-white/50 before:blur-lg before:transition-transform before:duration-700 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(159,199,120,0.65)] hover:before:translate-x-[380%]"
            >
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">Escríbenos</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={SOLPORT_MODULES_URL}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <Layers3 size={16} />
              Ver SP Suite
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          <ContactCard
            icon={Mail}
            label="Email"
            value="info@solport.net"
            href="mailto:info@solport.net"
          />
          <ContactCard
            icon={Phone}
            label="Teléfono"
            value="+34 93 567 76 76"
            href="tel:+34935677676"
          />
          <ContactCard
            icon={Building2}
            label="Sede"
            value="DFactory · Barcelona (España)"
            subValue="Carrer 27, 10-16 · Sector BZ · Sants-Montjuïc · 08040 Barcelona (España)"
            subHref="https://www.google.com/maps/search/?api=1&query=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040"
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="Solport Sistemas"
            href={LINKEDIN_URL}
            external
          />
        </div>
      </div>
      <LocationMap />
    </section>
  );
}

function LocationMap() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2 text-white">
          <MapPin size={14} style={{ color: '#9fc778' }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9fc778]">
            Cómo llegar
          </span>
          <span className="hidden text-xs text-white/55 sm:inline">
            · DFactory, Carrer 27, 10-16 · 08040 Barcelona (España)
          </span>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#dde89f] transition-colors hover:text-white"
        >
          Abrir en Maps
          <ArrowRight size={12} />
        </a>
      </div>
      <div className="relative h-80 w-full md:h-96">
        <iframe
          title="Ubicación de Solport — DFactory Barcelona (España)"
          src="https://maps.google.com/maps?q=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040&z=17&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
          allowFullScreen
        />
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  subValue,
  subHref,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  subValue?: string;
  subHref?: string;
}) {
  const body = (
    <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-4 backdrop-blur-sm transition-all hover:border-[#9fc778]/50 hover:bg-white/[0.08]">
      <span
        className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: 'rgba(159,199,120,0.2)', color: '#9fc778' }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <div className="min-w-0 leading-tight">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">{label}</p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
        {subValue ? (
          subHref ? (
            <a
              href={subHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-1 inline-block text-[11px] leading-snug text-white/65 underline decoration-[#9fc778]/40 decoration-dotted underline-offset-2 transition-colors hover:text-[#9fc778]"
            >
              {subValue}
            </a>
          ) : (
            <p className="mt-1 text-[11px] leading-snug text-white/65">{subValue}</p>
          )
        ) : null}
      </div>
    </div>
  );
  if (!href) return body;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {body}
    </a>
  );
}
