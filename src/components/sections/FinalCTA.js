import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item } from "../../utils/animations";
import { CONTACT } from "../../utils/constants";
export const FinalCTA = () => {
    return (_jsx("section", { className: "section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "absolute inset-0 -z-10 pointer-events-none", children: _jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl" }) }), _jsxs(motion.div, { className: "premium-border rounded-3xl p-8 md:p-16 border-primary border-opacity-40 text-center", variants: container, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx(motion.div, { variants: item, className: "mb-6", children: _jsx(Badge, { variant: "accent", className: "uppercase tracking-widest", children: "Ready to Dominate Your Category" }) }), _jsxs(motion.h2, { variants: item, className: "text-4xl md:text-5xl font-display font-bold mb-4 text-white", children: ["Let's Build a Fitness Brand", _jsx("br", {}), "Clients Instantly Trust"] }), _jsx(motion.p, { variants: item, className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto", children: "From elite coaching services to premium perception, this experience is designed to attract high-intent clients and convert faster." }), _jsxs(motion.div, { variants: item, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { variant: "primary", size: "lg", onClick: () => {
                                        window.location.href = CONTACT.phoneLink;
                                    }, children: "Start With a Call" }), _jsx(Button, { variant: "outline", size: "lg", onClick: () => document
                                        .getElementById("services")
                                        ?.scrollIntoView({ behavior: "smooth" }), children: "View Signature Programs" })] }), _jsxs(motion.div, { variants: item, className: "mt-8 text-sm text-gray-400", children: [CONTACT.addressLine1, _jsx("br", {}), CONTACT.addressLine2] })] })] }) }));
};
