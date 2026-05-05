import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { fadeInUp, container, item } from "../../utils/animations";

export const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="glass rounded-3xl p-8 md:p-16 border-primary border-opacity-50 text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div variants={item} className="mb-6">
            <Badge variant="accent">Limited Time Offer</Badge>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            Ready to Transform?
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join 5,000+ members who've already achieved their elite fitness
            goals. Get 40% off your first month + free assessment.
          </motion.p>

          {/* Email Signup */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-8 max-w-lg mx-auto"
          >
            <div className="flex-grow relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark-900 bg-opacity-50 border border-white border-opacity-20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              {isSubmitted ? "✓ Sent!" : "Get Started"}
            </Button>
          </motion.form>

          {/* Social Proof */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                ✓
              </div>
              No credit card needed
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                ✓
              </div>
              Instant access
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                ✓
              </div>
              Cancel anytime
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          By signing up, you agree to our terms of service. We respect your
          privacy.
        </motion.p>
      </div>
    </section>
  );
};
