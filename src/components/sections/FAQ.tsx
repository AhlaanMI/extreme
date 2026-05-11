import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { CONTACT, FAQ } from "../../utils/constants";
import { container, item } from "../../utils/animations";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="heading-eyebrow mb-4 inline-block">
            Common Questions
          </div>
          <h2 className="section-title">
            Answers to Your <span className="gradient-text">Top Questions</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Got questions before joining? We've answered the ones we hear most.
            Still unclear? Reach out—we're happy to help.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-3 md:space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FAQ.map((faq, index) => (
            <motion.div key={index} variants={item}>
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full premium-border rounded-2xl p-4 md:p-5 text-left hover:border-primary/60 transition-all group"
                whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.02)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-base md:text-lg group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-primary mt-1"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Block - Optimized for conversions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-400 text-base sm:text-lg mb-8 font-medium">
            Still have questions? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-sm mx-auto">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2"
              onClick={() => {
                window.location.href = CONTACT.whatsappLink;
              }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
              onClick={() => {
                window.location.href = CONTACT.phoneLink;
              }}
            >
              <Phone size={18} />
              Call {CONTACT.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
