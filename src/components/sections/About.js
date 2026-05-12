import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Award, Users, Zap } from "lucide-react";
import { slideInLeft, slideInRight, stagger, item, } from "../../utils/animations";
export const About = () => {
    const shouldReduceMotion = useReducedMotion();
    const benefits = [
        {
            icon: Award,
            title: "Personal Training",
            description: "Coaches who tailor workouts to your goals and fitness level",
        },
        {
            icon: Users,
            title: "Youth Classes",
            description: "Safe, energetic sessions for younger members",
        },
        {
            icon: Zap,
            title: "Nutrition Consulting",
            description: "Practical guidance to support healthy progress",
        },
        {
            icon: Check,
            title: "Supportive Environment",
            description: "Friendly coaching and motivation every session",
        },
    ];
    return (_jsx("section", { id: "about", className: "section relative", children: _jsx("div", { className: "max-w-7xl mx-auto container-max", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center", children: [_jsxs(motion.div, { variants: slideInLeft, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "relative", children: [_jsxs("div", { className: "relative aspect-square rounded-3xl overflow-hidden premium-border", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop", alt: "State-of-the-art gym facility", className: "w-full h-full object-cover", loading: "lazy" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20" })] }), _jsxs(motion.div, { className: "absolute bottom-4 right-4 w-40 rounded-xl p-4 glass-dark sm:-bottom-6 sm:-right-6 sm:w-48 sm:p-6", animate: shouldReduceMotion ? undefined : { y: [0, -12, 0] }, transition: shouldReduceMotion
                                    ? undefined
                                    : { duration: 3, repeat: Infinity }, children: [_jsx("div", { className: "text-3xl font-bold gradient-text mb-2", children: "All Ages" }), _jsx("p", { className: "text-sm text-gray-300", children: "Programs for every fitness level" })] })] }), _jsxs(motion.div, { variants: slideInRight, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx(motion.div, { className: "mb-6", initial: { opacity: 0 }, whileInView: { opacity: 1 }, children: _jsx("span", { className: "heading-eyebrow", children: "Why Extreme Fitness Center" }) }), _jsxs("h2", { className: "section-title mb-6", children: ["Built For ", _jsx("span", { className: "gradient-text", children: "Every Goal" })] }), _jsx("p", { className: "text-gray-300 text-base sm:text-lg mb-8 leading-relaxed", children: "Extreme Fitness Center in Mawanella offers private lessons, personal training, nutrition consulting, youth classes, body building, fitness training, and weight training. Our coaches focus on safe progress, proper form, and confidence." }), _jsx(motion.div, { className: "space-y-4", variants: stagger, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: benefits.map((benefit) => (_jsxs(motion.div, { variants: item, className: "flex gap-3 rounded-2xl p-3 premium-border sm:gap-4 sm:p-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "flex items-center justify-center h-12 w-12 rounded-lg bg-primary bg-opacity-20", children: _jsx(benefit.icon, { className: "h-6 w-6 text-primary" }) }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white mb-1", children: benefit.title }), _jsx("p", { className: "text-gray-400 text-sm", children: benefit.description })] })] }, benefit.title))) })] })] }) }) }));
};
