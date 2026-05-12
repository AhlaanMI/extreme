import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { CONTACT } from "../../utils/constants";
export const UrgencyBanner = () => {
    const [slotsLeft, setSlotsLeft] = useState(5);
    useEffect(() => {
        // Simulate slot reduction for urgency (production: fetch from backend)
        const interval = setInterval(() => {
            setSlotsLeft((prev) => Math.max(2, prev - Math.random() * 0.5));
        }, 45000); // Update every 45 seconds
        return () => clearInterval(interval);
    }, []);
    const trustItems = [
        {
            icon: Shield,
            title: "No Lock-In",
            desc: "Cancel anytime. Month-to-month flexibility.",
        },
        {
            icon: CheckCircle2,
            title: "Satisfaction Guarantee",
            desc: "Results in 4-6 weeks or we adjust your program.",
        },
        {
            icon: Users,
            title: "Personal Coaching",
            desc: "Every member gets a dedicated coach.",
        },
        {
            icon: Clock,
            title: "Quick Start",
            desc: "First session within 48 hours of booking.",
        },
    ];
    return (_jsxs("section", { className: "section relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900", children: [_jsxs("div", { className: "pointer-events-none absolute inset-0", children: [_jsx("div", { className: "absolute top-0 right-0 h-96 w-96 bg-primary/20 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 bg-accent/15 rounded-full blur-3xl" })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "mb-10 rounded-3xl border-primary/40 bg-gradient-to-br from-primary/10 via-dark-900 to-dark-950 p-5 premium-border sm:p-6 md:mb-12 md:p-10", children: _jsxs("div", { className: "grid items-center gap-6 md:grid-cols-2 md:gap-8", children: [_jsxs("div", { children: [_jsx(motion.div, { animate: { scale: [1, 1.05, 1] }, transition: { duration: 2, repeat: Infinity }, className: "inline-block mb-4", children: _jsxs("div", { className: "flex items-center gap-2 text-base font-bold text-accent sm:text-lg", children: [_jsx(Clock, { size: 20 }), _jsx("span", { children: "Limited Spots Available" })] }) }), _jsxs("h2", { className: "mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl", children: ["New Batch Starting", _jsx("br", {}), _jsx("span", { className: "gradient-text", children: "Next Monday" })] }), _jsxs("p", { className: "text-gray-300 text-base md:text-lg mb-6 leading-relaxed", children: ["We're accepting only", " ", _jsxs("span", { className: "text-accent font-semibold", children: [Math.ceil(slotsLeft), " premium spots"] }), " ", "for personalized coaching this month. Exclusive 1:1 attention with our head coach."] }), _jsxs("div", { className: "mb-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:items-center", children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-accent animate-pulse" }), _jsx("p", { className: "text-sm text-gray-300", children: "First session discount (20%) ends in 48 hours" })] }), _jsx(Button, { variant: "primary", size: "lg", className: "w-full md:w-auto", onClick: () => {
                                                window.location.href = CONTACT.whatsappLink;
                                            }, children: "Claim Your Spot Now" })] }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, className: "rounded-2xl bg-white/[0.02] p-5 premium-border sm:p-6 md:p-8", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-400 text-sm mb-1", children: "Spots Remaining" }), _jsx("p", { className: "text-3xl md:text-4xl font-bold text-accent", children: Math.ceil(slotsLeft) })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-gray-400 text-sm mb-1", children: "Regular Price" }), _jsx("p", { className: "text-lg font-bold text-gray-400 line-through", children: "LKR 6,500" }), _jsx("p", { className: "text-2xl font-bold text-accent", children: "LKR 5,200" })] })] }), _jsxs("div", { className: "space-y-3 pt-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }), _jsx("span", { className: "text-white font-medium", children: "Free first assessment" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }), _jsx("span", { className: "text-white font-medium", children: "Personalized program" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }), _jsx("span", { className: "text-white font-medium", children: "Nutrition guidance" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }), _jsx("span", { className: "text-white font-medium", children: "Lifetime support" })] })] })] }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.1 }, className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: trustItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (_jsxs(motion.div, { className: "premium-border rounded-2xl p-4 md:p-5 text-center hover:border-primary/60 transition-all group cursor-default", whileHover: { y: -4 }, children: [_jsx("div", { className: "flex justify-center mb-3", children: _jsx("div", { className: "p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors", children: _jsx(Icon, { size: 24, className: "text-primary" }) }) }), _jsx("h3", { className: "font-semibold text-white text-sm md:text-base mb-1", children: item.title }), _jsx("p", { className: "text-gray-400 text-xs md:text-sm", children: item.desc })] }, idx));
                        }) })] })] }));
};
