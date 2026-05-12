import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Award, CalendarDays, ShieldCheck, Users } from "lucide-react";
import { StatCounter } from "../ui/StatCounter";
export const TrustStrip = () => {
    const highlights = [
        {
            value: 22,
            suffix: "+",
            title: "Years Legacy",
            subtitle: "Coaching experience in strength training",
            icon: Award,
        },
        {
            value: 7,
            title: "Core Programs",
            subtitle: "Personalized pathways for every goal",
            icon: ShieldCheck,
        },
        {
            value: 1,
            suffix: ":1",
            title: "Coach Support",
            subtitle: "Focused guidance in every session",
            icon: Users,
        },
        {
            value: 2004,
            title: "Since Opening",
            subtitle: "Landmark gym on New Kandy Road",
            icon: CalendarDays,
        },
    ];
    return (_jsx("section", { className: "py-10 md:py-14 border-y border-white border-opacity-10 bg-dark-900/40", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("p", { className: "mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300 sm:text-xs sm:tracking-[0.28em]", children: "Trusted by Beginners to Advanced Athletes" }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6 }, children: highlights.map((item, index) => (_jsxs(motion.div, { className: "flex flex-col items-center justify-center premium-border rounded-xl p-5 sm:p-6 hover:border-primary/70 transition-colors", whileHover: { y: -4 }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.5 }, children: [_jsx(item.icon, { className: "h-4 w-4 text-primary mb-2" }), _jsx(StatCounter, { value: item.value, suffix: item.suffix, label: item.title, valueClassName: "text-2xl md:text-3xl mb-0", labelClassName: "uppercase tracking-[0.14em] text-[10px]" }), _jsx("div", { className: "mt-2 text-[11px] sm:text-xs text-gray-300 text-center leading-relaxed", children: item.subtitle })] }, index))) })] }) }));
};
