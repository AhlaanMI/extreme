import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item } from "../../utils/animations";
import { CONTACT } from "../../utils/constants";

export const FinalCTA: React.FC = () => {
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
            <Badge variant="accent">Get Started</Badge>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            Ready to Start Training?
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Call to book a private lesson, personal training, or nutrition
            consulting session. Youth classes and fitness training are available
            for all levels.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.href = CONTACT.phoneLink;
              }}
            >
              Call {CONTACT.phone}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Services
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 text-sm text-gray-400"
          >
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
