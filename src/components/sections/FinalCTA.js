import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { container, item } from "../../utils/animations";
import { BOOKING_PACKAGES, CONTACT } from "../../utils/constants";
export const FinalCTA = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        date: "",
        phone: "",
        packageName: "",
        notes: "",
    });
    const openWhatsApp = () => {
        const packageLine = formData.packageName
            ? `Package: ${formData.packageName}`
            : "Package: Not selected yet";
        const message = encodeURIComponent([
            "Hi, I would like to book a call.",
            `Full name: ${formData.fullName || "Not provided"}`,
            `Date: ${formData.date || "Not provided"}`,
            `Phone: ${formData.phone || "Not provided"}`,
            packageLine,
            `Notes: ${formData.notes || "No additional notes"}`,
        ].join("\n"));
        window.open(`${CONTACT.whatsappLink}?text=${message}`, "_blank");
    };
    return (_jsxs("section", { id: "final-cta", className: "section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950", children: [_jsx("div", { className: "absolute inset-0 -z-10 pointer-events-none", children: _jsx("div", { className: "absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl" }) }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx(motion.div, { className: "rounded-3xl border border-primary border-opacity-40 p-5 premium-border noise-overlay sm:p-8 md:p-12", variants: container, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: _jsxs(motion.div, { variants: container, initial: "hidden", whileInView: "visible", className: "grid items-start gap-6 sm:gap-8 lg:grid-cols-2", children: [_jsxs(motion.div, { variants: item, className: "text-center lg:text-left", children: [_jsx("div", { className: "mb-6", children: _jsx(Badge, { variant: "accent", className: "uppercase tracking-widest", children: "READY TO DOMINATE YOUR CATEGORY" }) }), _jsxs("h2", { className: "mb-4 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:text-5xl", children: ["Let's Build a Fitness Brand", _jsx("br", {}), "Clients Instantly Trust"] }), _jsx("p", { className: "mb-8 max-w-xl text-base text-gray-300 sm:text-lg md:text-xl", children: "From elite coaching services to premium perception, this experience is designed to attract high-intent clients and convert faster." }), _jsxs("div", { className: "flex flex-col items-stretch justify-start gap-4 sm:flex-row sm:items-center", children: [_jsx(Button, { variant: "primary", size: "lg", className: "w-full sm:w-auto", onClick: () => {
                                                    window.location.href = CONTACT.phoneLink;
                                                }, children: "Start With a Call" }), _jsx(Button, { variant: "outline", size: "lg", className: "w-full sm:w-auto", onClick: () => document
                                                    .getElementById("services")
                                                    ?.scrollIntoView({ behavior: "smooth" }), children: "View Signature Programs" })] }), _jsxs("div", { className: "mt-8 text-sm text-gray-400", children: [CONTACT.addressLine1, _jsx("br", {}), CONTACT.addressLine2] })] }), _jsx(motion.div, { variants: item, children: _jsx("div", { className: "rounded-2xl bg-transparent p-4 premium-border sm:p-6", children: _jsxs("form", { className: "grid gap-4", onSubmit: (event) => {
                                            event.preventDefault();
                                            openWhatsApp();
                                        }, children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsx("input", { type: "text", placeholder: "Full name", value: formData.fullName, onChange: (event) => setFormData((current) => ({
                                                            ...current,
                                                            fullName: event.target.value,
                                                        })), className: "w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]" }), _jsx("input", { type: "date", value: formData.date, onChange: (event) => setFormData((current) => ({
                                                            ...current,
                                                            date: event.target.value,
                                                        })), className: "w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]" })] }), _jsx("input", { type: "tel", placeholder: "Phone number", value: formData.phone, onChange: (event) => setFormData((current) => ({
                                                    ...current,
                                                    phone: event.target.value,
                                                })), className: "w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]" }), _jsxs("select", { value: formData.packageName, onChange: (event) => setFormData((current) => ({
                                                    ...current,
                                                    packageName: event.target.value,
                                                })), className: "w-full appearance-none rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]", children: [_jsx("option", { value: "", children: "Select service" }), BOOKING_PACKAGES.map((pkg) => (_jsx("option", { value: pkg.name, children: pkg.name }, pkg.name)))] }), _jsx("textarea", { rows: 4, placeholder: "Tell us about your goals, availability, and anything we should know", value: formData.notes, onChange: (event) => setFormData((current) => ({
                                                    ...current,
                                                    notes: event.target.value,
                                                })), className: "w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all resize-none focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]" }), _jsx("div", { className: "pt-2", children: _jsxs(Button, { variant: "primary", size: "lg", type: "submit", className: "w-full flex items-center justify-center gap-2", children: [_jsx(MessageCircle, { size: 18 }), "Send via WhatsApp"] }) })] }) }) })] }) }) })] }));
};
