import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

declare const Button: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare function DemoButton({ href, label, size, icon: Icon, }: {
    href: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
}): react_jsx_runtime.JSX.Element;
declare const DEMO_CTA_BASE_CLASS = "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#9fc778]/35 bg-[linear-gradient(135deg,#29677c_0%,#113e61_48%,#9fc778_130%)] font-semibold text-white shadow-[0_18px_40px_rgba(17,62,97,0.34)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(17,62,97,0.42)] before:absolute before:inset-y-0 before:left-[-28%] before:w-1/3 before:skew-x-[-22deg] before:bg-white/30 before:blur-xl before:transition-transform before:duration-700 hover:before:translate-x-[320%]";
declare const DEMO_CTA_SIZE_CLASS: Record<"sm" | "md" | "lg", string>;

declare function ContactSection(): react_jsx_runtime.JSX.Element;

export { Button, ContactSection, DEMO_CTA_BASE_CLASS, DEMO_CTA_SIZE_CLASS, DemoButton };
