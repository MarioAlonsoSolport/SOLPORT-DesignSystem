// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ children }) => {
  return /* @__PURE__ */ jsx("button", { style: { backgroundColor: "orange", color: "black" }, children });
};

// src/components/DemoButton.tsx
import { ArrowRight } from "lucide-react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var BASE_CLASS = "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#9fc778]/35 bg-[linear-gradient(135deg,#29677c_0%,#113e61_48%,#9fc778_130%)] font-semibold text-white shadow-[0_18px_40px_rgba(17,62,97,0.34)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(17,62,97,0.42)] before:absolute before:inset-y-0 before:left-[-28%] before:w-1/3 before:skew-x-[-22deg] before:bg-white/30 before:blur-xl before:transition-transform before:duration-700 hover:before:translate-x-[320%]";
var SIZE_CLASS = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm"
};
function DemoButton({
  href,
  label = "Solicitar demo",
  size = "md",
  icon: Icon = ArrowRight
}) {
  return /* @__PURE__ */ jsxs("a", { href, className: `${BASE_CLASS} ${SIZE_CLASS[size]}`, children: [
    /* @__PURE__ */ jsx2("span", { className: "relative z-10", children: label }),
    /* @__PURE__ */ jsx2(
      Icon,
      {
        size: size === "sm" ? 15 : 16,
        className: "relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
      }
    )
  ] });
}
var DEMO_CTA_BASE_CLASS = BASE_CLASS;
var DEMO_CTA_SIZE_CLASS = SIZE_CLASS;

// src/components/landing/ContactSection.tsx
import {
  ArrowRight as ArrowRight2,
  Building2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

// src/components/landing/brand.ts
var LINKEDIN_URL = "https://www.linkedin.com/in/solport-sistemas-sl-7316102ab/";
var SOLPORT_MODULES_URL = "/sp-suite";
var CONTACT_MAILTO = `mailto:info@solport.net?subject=${encodeURIComponent(
  "Consulta sobre Solport"
)}&body=${encodeURIComponent(
  "Hola equipo Solport,\n\nMe gustar\xEDa recibir m\xE1s informaci\xF3n sobre vuestras soluciones.\n\nNombre:\nEmpresa:\nTel\xE9fono:\nPerfil / sector:\n\nGracias."
)}`;

// src/components/landing/ContactSection.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function ContactSection() {
  return /* @__PURE__ */ jsxs2("section", { id: "contacto", className: "relative overflow-hidden bg-[#113e61] px-4 py-24 text-white", children: [
    /* @__PURE__ */ jsx3("div", { className: "pointer-events-none absolute inset-0 opacity-[0.14]", children: /* @__PURE__ */ jsx3(
      "div",
      {
        className: "absolute inset-0",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px"
        }
      }
    ) }),
    /* @__PURE__ */ jsxs2("div", { className: "relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-center", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("p", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dde89f]", children: [
          /* @__PURE__ */ jsx3(Mail, { size: 12 }),
          " Hablemos"
        ] }),
        /* @__PURE__ */ jsxs2(
          "h2",
          {
            className: "mt-4 text-3xl font-bold leading-tight md:text-4xl",
            style: { fontFamily: "'Exo Soft','Exo 2',sans-serif" },
            children: [
              "Cu\xE9ntanos tu operativa. ",
              /* @__PURE__ */ jsx3("span", { className: "text-[#9fc778]", children: "Te preparamos una demo" }),
              " ",
              "sobre tu d\xEDa a d\xEDa."
            ]
          }
        ),
        /* @__PURE__ */ jsx3("p", { className: "mt-5 max-w-xl text-base leading-relaxed text-white/80", children: "Sin presentaciones gen\xE9ricas. Adaptamos la demo a tu sector, al tama\xF1o de tu empresa y a los escenarios t\xEDpicos de tu d\xEDa a d\xEDa." }),
        /* @__PURE__ */ jsxs2("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs2(
            "a",
            {
              href: CONTACT_MAILTO,
              className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-[#9fc778]/40 bg-[linear-gradient(135deg,#9fc778_0%,#dde89f_55%,#9fc778_110%)] px-7 py-3 text-sm font-bold text-[#113e61] shadow-[0_16px_40px_rgba(159,199,120,0.45)] transition-all before:absolute before:inset-y-0 before:left-[-30%] before:w-1/3 before:skew-x-[-22deg] before:bg-white/50 before:blur-lg before:transition-transform before:duration-700 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(159,199,120,0.65)] hover:before:translate-x-[380%]",
              children: [
                /* @__PURE__ */ jsx3(Mail, { size: 16, className: "relative z-10" }),
                /* @__PURE__ */ jsx3("span", { className: "relative z-10", children: "Escr\xEDbenos" }),
                /* @__PURE__ */ jsx3(
                  ArrowRight2,
                  {
                    size: 16,
                    className: "relative z-10 transition-transform group-hover:translate-x-0.5"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs2(
            "a",
            {
              href: SOLPORT_MODULES_URL,
              className: "inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsx3(Layers3, { size: 16 }),
                "Ver SP Suite"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsx3(
          ContactCard,
          {
            icon: Mail,
            label: "Email",
            value: "info@solport.net",
            href: "mailto:info@solport.net"
          }
        ),
        /* @__PURE__ */ jsx3(
          ContactCard,
          {
            icon: Phone,
            label: "Tel\xE9fono",
            value: "+34 93 567 76 76",
            href: "tel:+34935677676"
          }
        ),
        /* @__PURE__ */ jsx3(
          ContactCard,
          {
            icon: Building2,
            label: "Sede",
            value: "DFactory \xB7 Barcelona (Espa\xF1a)",
            subValue: "Carrer 27, 10-16 \xB7 Sector BZ \xB7 Sants-Montju\xEFc \xB7 08040 Barcelona (Espa\xF1a)",
            subHref: "https://www.google.com/maps/search/?api=1&query=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040"
          }
        ),
        /* @__PURE__ */ jsx3(
          ContactCard,
          {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Solport Sistemas",
            href: LINKEDIN_URL,
            external: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx3(LocationMap, {})
  ] });
}
function LocationMap() {
  return /* @__PURE__ */ jsxs2("div", { className: "relative mx-auto mt-14 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2 text-white", children: [
        /* @__PURE__ */ jsx3(MapPin, { size: 14, style: { color: "#9fc778" } }),
        /* @__PURE__ */ jsx3("span", { className: "text-[11px] font-bold uppercase tracking-[0.22em] text-[#9fc778]", children: "C\xF3mo llegar" }),
        /* @__PURE__ */ jsx3("span", { className: "hidden text-xs text-white/55 sm:inline", children: "\xB7 DFactory, Carrer 27, 10-16 \xB7 08040 Barcelona (Espa\xF1a)" })
      ] }),
      /* @__PURE__ */ jsxs2(
        "a",
        {
          href: "https://www.google.com/maps/search/?api=1&query=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#dde89f] transition-colors hover:text-white",
          children: [
            "Abrir en Maps",
            /* @__PURE__ */ jsx3(ArrowRight2, { size: 12 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "relative h-80 w-full md:h-96", children: /* @__PURE__ */ jsx3(
      "iframe",
      {
        title: "Ubicaci\xF3n de Solport \u2014 DFactory Barcelona (Espa\xF1a)",
        src: "https://maps.google.com/maps?q=DFactory+Barcelona+Carrer+27+10-16+Sector+BZ+Sants-Montjuic+08040&z=17&output=embed",
        width: "100%",
        height: "100%",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        style: { border: 0, filter: "grayscale(0.2) contrast(1.05)" },
        allowFullScreen: true
      }
    ) })
  ] });
}
function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  subValue,
  subHref
}) {
  const body = /* @__PURE__ */ jsxs2("div", { className: "flex items-start gap-4 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-4 backdrop-blur-sm transition-all hover:border-[#9fc778]/50 hover:bg-white/[0.08]", children: [
    /* @__PURE__ */ jsx3(
      "span",
      {
        className: "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
        style: { backgroundColor: "rgba(159,199,120,0.2)", color: "#9fc778" },
        children: /* @__PURE__ */ jsx3(Icon, { size: 20, strokeWidth: 1.8 })
      }
    ),
    /* @__PURE__ */ jsxs2("div", { className: "min-w-0 leading-tight", children: [
      /* @__PURE__ */ jsx3("p", { className: "text-[10px] font-bold uppercase tracking-[0.22em] text-white/55", children: label }),
      /* @__PURE__ */ jsx3("p", { className: "mt-1 text-sm font-semibold text-white", children: value }),
      subValue ? subHref ? /* @__PURE__ */ jsx3(
        "a",
        {
          href: subHref,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: (e) => e.stopPropagation(),
          className: "mt-1 inline-block text-[11px] leading-snug text-white/65 underline decoration-[#9fc778]/40 decoration-dotted underline-offset-2 transition-colors hover:text-[#9fc778]",
          children: subValue
        }
      ) : /* @__PURE__ */ jsx3("p", { className: "mt-1 text-[11px] leading-snug text-white/65", children: subValue }) : null
    ] })
  ] });
  if (!href) return body;
  return /* @__PURE__ */ jsx3(
    "a",
    {
      href,
      target: external ? "_blank" : void 0,
      rel: external ? "noopener noreferrer" : void 0,
      children: body
    }
  );
}
export {
  Button,
  ContactSection,
  DEMO_CTA_BASE_CLASS,
  DEMO_CTA_SIZE_CLASS,
  DemoButton
};
