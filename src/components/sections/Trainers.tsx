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
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-accent mb-4 inline-block">Elite Coaching</div>
          <h2 className="section-title">
            Meet Your <span className="gradient-text">Head Coach</span>
          </h2>
          <p className="section-subtitle">
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
              className="glass rounded-3xl overflow-hidden hover:shadow-glow-lg transition-all group lg:grid lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Visual */}
              <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4] bg-dark-900 lg:max-w-[430px]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 badge-accent text-xs">
                  Featured Coach
                </div>

                <div className="absolute bottom-4 left-4 right-4 premium-border rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-1">
                    Specialty
                  </p>
                  <p className="text-white font-semibold">{trainer.specialty}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div>
                  <h3 className="font-bold text-2xl mb-1 text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-4">
                    {trainer.title}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
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
                          className="premium-border rounded-xl px-4 py-3 text-sm text-gray-200"
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
