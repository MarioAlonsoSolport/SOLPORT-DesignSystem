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
export {
  Button,
  DEMO_CTA_BASE_CLASS,
  DEMO_CTA_SIZE_CLASS,
  DemoButton
};
