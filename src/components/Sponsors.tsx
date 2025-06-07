"use client";

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Building, Star, Award, Zap } from "lucide-react";

const sponsors = [
  {
    id: 1,
    name: "TechCorp",
    tier: "Platinum",
    logo: "TC",
    description: "Leading AI & Cloud Solutions",
    benefits: ["$10,000 Prize Pool", "Mentorship", "Job Opportunities"],
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    icon: <Building className="h-8 w-8 text-blue-400" />,
  },
  {
    id: 2,
    name: "InnovateLabs",
    tier: "Gold",
    logo: "IL",
    description: "Startup Accelerator & VC",
    benefits: ["$5,000 Prize Pool", "Startup Support", "Investment Opportunities"],
    color: "from-yellow-500 to-amber-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    icon: <Star className="h-8 w-8 text-yellow-400" />,
  },
  {
    id: 3,
    name: "CodeFlow",
    tier: "Silver",
    logo: "CF",
    description: "Developer Tools & Platform",
    benefits: ["Free Pro Accounts", "API Credits", "Swag Pack"],
    color: "from-gray-400 to-gray-300",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-400/30",
    icon: <Award className="h-8 w-8 text-gray-400" />,
  },
  {
    id: 4,
    name: "NextGen",
    tier: "Bronze",
    logo: "NG",
    description: "Emerging Tech Company",
    benefits: ["Mentorship", "Internships", "Tech Resources"],
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    icon: <Zap className="h-8 w-8 text-orange-400" />,
  },
];

const tierOrder = { Platinum: 1, Gold: 2, Silver: 3, Bronze: 4 };

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Sponsors() {
  const sortedSponsors = [...sponsors].sort((a, b) => tierOrder[a.tier as keyof typeof tierOrder] - tierOrder[b.tier as keyof typeof tierOrder]);

  return (
    <section id="sponsors" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_70%)]" />
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Building className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Our Partners</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with industry leaders who share our vision of empowering the next generation of innovators
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {sortedSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className={index < 2 ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <CardSpotlight className={`h-full ${sponsor.bgColor} ${sponsor.borderColor} backdrop-blur-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="relative z-10 p-8">
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${sponsor.color} rounded-full px-4 py-2`}>
                      <span className="text-sm font-bold text-black">{sponsor.tier}</span>
                    </div>
                    {sponsor.icon}
                  </div>

                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-black">{sponsor.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{sponsor.name}</h3>
                      <p className="text-gray-400">{sponsor.description}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Sponsorship Benefits</h4>
                    <ul className="space-y-2">
                      {sponsor.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sponsor.color}`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-gray-300 mb-8">
              Partner with us to support innovation and connect with talented developers. 
              Join leading companies in shaping the future of technology.
            </p>
            <motion.a
              href="mailto:sponsors@hackhub.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg border border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building className="h-5 w-5" />
              Partner With Us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
