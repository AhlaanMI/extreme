import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, PhoneCall } from "lucide-react";
import { Button } from "../ui/Button";
import { CONTACT, TRAINERS } from "../../utils/constants";
import { container, item } from "../../utils/animations";

export const Trainers: React.FC = () => {
  return (
    <section
      id="trainers"
      className="relative overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 py-14 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/4 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="heading-eyebrow mb-4">Elite Coaching</div>
          <h2 className="section-title">
            Meet Your <span className="gradient-text">Head Coach</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Championship-level achievements and 22 years of proven gym
            leadership.
          </p>
        </motion.div>

        {/* Featured Coach */}
        <motion.div
          className="grid grid-cols-1 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={item}
              className="group overflow-hidden rounded-3xl glass transition-all noise-overlay hover:shadow-glow-lg lg:grid lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Visual */}
              <div className="relative aspect-[4/5] overflow-hidden bg-dark-900 lg:aspect-[3/4] lg:max-w-[430px]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 badge-accent text-xs">
                  Featured Coach
                </div>

                <div className="absolute bottom-4 left-4 right-4 premium-border rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-1">
                    Specialty
                  </p>
                  <p className="text-white font-semibold">
                    {trainer.specialty}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex h-full flex-col p-5 sm:p-6 md:p-8">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-4">
                    {trainer.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {trainer.bio}
                  </p>

                  <div className="mt-6">
                    <p className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                      <Award size={16} className="text-accent" />
                      Career Highlights
                    </p>
                    <div className="space-y-3">
                      {trainer.achievements.map((achievement, index) => (
                        <div
                          key={achievement}
                          className="premium-border rounded-xl px-4 py-3 text-sm text-gray-200 break-words"
                        >
                          <span className="text-primary font-semibold mr-2">
                            {String(index + 1).padStart(2, "0")}.
                          </span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-accent font-medium">
                    Experience: {trainer.experience}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    className="sm:flex-1"
                    icon={<PhoneCall size={16} />}
                    onClick={() => {
                      window.location.href = CONTACT.phoneLink;
                    }}
                  >
                    Call Coach
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="sm:flex-1"
                    icon={<ArrowRight size={16} />}
                    onClick={() =>
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Programs
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
