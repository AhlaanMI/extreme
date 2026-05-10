import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const TrustStrip = () => {
    const highlights = [
        { metric: "Goal-Focused", title: "Tailored progression plans" },
        { metric: "Coach-Led", title: "Expert supervision every session" },
        { metric: "High-Energy", title: "Premium training atmosphere" },
        { metric: "Portfolio Ready", title: "Branding that impresses clients" },
    ];
    return (_jsx("section", { className: "py-12 md:py-16 border-y border-white border-opacity-10 bg-dark-900 bg-opacity-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("p", { className: "text-center text-gray-300 text-sm mb-8 uppercase tracking-[0.3em] font-semibold", children: "Built for Ambitious Clients" }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6 }, children: highlights.map((item, index) => (_jsxs(motion.div, { className: "flex flex-col items-center justify-center premium-border rounded-xl p-6 hover:border-primary transition-colors", whileHover: { y: -4 }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.5 }, children: [_jsx("div", { className: "text-sm font-semibold text-primary mb-1 uppercase tracking-wide", children: item.metric }), _jsx("div", { className: "text-xs text-gray-300 text-center", children: item.title })] }, index))) })] }) }));
};
