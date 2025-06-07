"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Building, Star, Award, Zap, Shield, Calendar, Trophy, Sparkles, CheckCircle, ExternalLink, Users, Target } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const sponsors = [
  {
    id: 1,
    name: "CertifyMe",
    tier: "Platinum",
    logo: "CM",
    website: "https://certifyme.online",
    description: "Digital Credentialing & Certification Platform",
    longDescription: "CertifyMe is the world's leading digital credentialing platform, helping organizations issue, manage, and verify digital certificates and badges with blockchain security.",
    benefits: ["$15,000 Prize Pool", "Digital Certificates for Winners", "Blockchain Verification", "Career Opportunities"],
    features: ["Blockchain Security", "Digital Badges", "Global Recognition", "Skills Verification"],
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    category: "EdTech",
    founded: "2018",
    size: "Scale-up",
    sponsorshipLevel: "Title Sponsor"
  },
  {
    id: 2,
    name: "Sync Today",
    tier: "Gold",
    logo: "ST",
    website: "https://synctoday.co",
    description: "Real-time Collaboration & Productivity Suite",
    longDescription: "Sync Today revolutionizes team collaboration with AI-powered productivity tools, real-time synchronization, and seamless workflow management for modern teams.",
    benefits: ["$10,000 Prize Pool", "Pro Accounts for Teams", "API Integration Support", "Internship Programs"],
    features: ["AI-Powered Tools", "Real-time Sync", "Team Collaboration", "Workflow Automation"],
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    icon: <Calendar className="h-8 w-8 text-purple-400" />,
    category: "Productivity",
    founded: "2020",
    size: "Growth",
    sponsorshipLevel: "Innovation Partner"
  },
  {
    id: 3,
    name: "TechCorp",
    tier: "Gold",
    logo: "TC",
    website: "https://techcorp.com",
    description: "Leading AI & Cloud Solutions",
    longDescription: "TechCorp is a Fortune 500 company specializing in enterprise AI solutions, cloud infrastructure, and next-generation software development platforms.",
    benefits: ["$8,000 Prize Pool", "Cloud Credits", "Mentorship Program", "Job Opportunities"],
    features: ["AI Solutions", "Cloud Platform", "Enterprise Support", "Global Reach"],
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    icon: <Building className="h-8 w-8 text-emerald-400" />,
    category: "Enterprise Tech",
    founded: "2010",
    size: "Enterprise",
    sponsorshipLevel: "Technology Partner"
  },
  {
    id: 4,
    name: "InnovateLabs",
    tier: "Silver",
    logo: "IL",
    website: "https://innovatelabs.com",
    description: "Startup Accelerator & Venture Capital",
    longDescription: "InnovateLabs accelerates early-stage startups with funding, mentorship, and resources to transform innovative ideas into successful businesses.",
    benefits: ["$5,000 Prize Pool", "Startup Incubation", "Investment Opportunities", "Mentor Network"],
    features: ["VC Network", "Startup Support", "Funding Access", "Expert Mentorship"],
    color: "from-yellow-500 to-amber-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    category: "Venture Capital",
    founded: "2015",
    size: "Investment Fund",
    sponsorshipLevel: "Startup Partner"
  },
  {
    id: 5,
    name: "CodeFlow",
    tier: "Bronze",
    logo: "CF",
    website: "https://codeflow.dev",
    description: "Developer Tools & Platform",
    longDescription: "CodeFlow provides cutting-edge development tools, APIs, and platforms that streamline the software development lifecycle for modern teams.",
    benefits: ["Free Pro Accounts", "API Credits", "Developer Swag", "Technical Workshops"],
    features: ["Developer APIs", "Code Analytics", "Team Tools", "Open Source"],
    color: "from-gray-400 to-slate-300",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-400/30",
    glowColor: "shadow-gray-500/20",
    icon: <Award className="h-8 w-8 text-gray-400" />,
    category: "DevTools",
    founded: "2019",
    size: "Startup",
    sponsorshipLevel: "Community Partner"
  },
  {
    id: 6,
    name: "NextGen",
    tier: "Bronze",
    logo: "NG",
    website: "https://nextgen.tech",
    description: "Emerging Technology Innovation",
    longDescription: "NextGen focuses on breakthrough technologies including quantum computing, advanced AI, and sustainable tech solutions for the future.",
    benefits: ["Mentorship Sessions", "Internship Programs", "Tech Resources", "Innovation Workshops"],
    features: ["Quantum Tech", "Advanced AI", "Sustainability", "Future Focus"],
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    category: "Deep Tech",
    founded: "2021",
    size: "Startup",
    sponsorshipLevel: "Tech Partner"
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sortedSponsors = [...sponsors].sort((a, b) => 
    tierOrder[a.tier as keyof typeof tierOrder] - tierOrder[b.tier as keyof typeof tierOrder]
  );

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'from-cyan-400 via-blue-500 to-purple-600';
      case 'Gold': return 'from-yellow-400 via-yellow-500 to-amber-600';
      case 'Silver': return 'from-gray-300 via-gray-400 to-gray-600';
      case 'Bronze': return 'from-orange-400 via-red-500 to-pink-600';
      default: return 'from-blue-400 to-purple-600';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'Platinum': return <Trophy className="h-6 w-6" />;
      case 'Gold': return <Star className="h-6 w-6" />;
      case 'Silver': return <Award className="h-6 w-6" />;
      case 'Bronze': return <Target className="h-6 w-6" />;
      default: return <Building className="h-6 w-6" />;
    }
  };

  return (
    <section id="sponsors" className="relative py-20 overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"
        style={{ y: backgroundY }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_80%)]" />
      
      {/* Animated particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full"
              animate={{
                x: [0, (i * 60) % 800],
                y: [0, (i * 50) % 600],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 15 + (i % 5),
                repeat: Infinity,
                delay: i * 1,
              }}
              style={{
                left: (i * 7) % 100 + "%",
                top: (i * 9) % 100 + "%",
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ opacity }}
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-8 py-4 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            {...floatingAnimation}
          >
            <Building className="h-6 w-6 text-blue-400" />
            <span className="text-blue-300 font-bold text-lg">Our Amazing Partners</span>
            <Sparkles className="h-5 w-5 text-pink-400" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Sponsors & Partners
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're proud to partner with industry leaders and innovative companies who share our vision of empowering the next generation of developers and creators
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            variants={staggerContainer}
          >
            {[
              { label: "Total Prize Pool", value: "$48K+", icon: <Trophy className="h-5 w-5" /> },
              { label: "Partner Companies", value: "6+", icon: <Building className="h-5 w-5" /> },
              { label: "Career Opportunities", value: "50+", icon: <Users className="h-5 w-5" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-full px-6 py-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-cyan-400">{stat.icon}</div>
                <span className="text-white font-bold">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>{/* Enhanced Sponsors Grid */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {/* Platinum Sponsors - Full Width */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h3 
              className="text-center text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              variants={scaleIn}
            >
              Platinum Sponsors
            </motion.h3>
            <div className="grid grid-cols-1 gap-8">
              {sortedSponsors.filter(sponsor => sponsor.tier === 'Platinum').map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  whileHover={{ scale: 1.02, z: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedSponsor(selectedSponsor === sponsor.id ? null : sponsor.id)}
                >
                  <CardSpotlight className={`h-full ${sponsor.bgColor} ${sponsor.borderColor} backdrop-blur-xl hover:${sponsor.glowColor} transition-all duration-500 ${selectedSponsor === sponsor.id ? 'ring-2 ring-cyan-400/50' : ''}`}>
                    <div className="relative z-10 p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Left Section - Logo & Basic Info */}
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-6 mb-6">
                            <motion.div 
                              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center shadow-2xl ${sponsor.glowColor}`}
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <span className="text-3xl font-bold text-black">{sponsor.logo}</span>
                            </motion.div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-3xl font-bold text-white">{sponsor.name}</h3>
                                <motion.a
                                  href={sponsor.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </motion.a>
                              </div>
                              <p className="text-gray-300 text-lg mb-3">{sponsor.description}</p>
                              <div className="flex items-center gap-2">
                                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getTierGradient(sponsor.tier)} rounded-full px-4 py-2`}>
                                  {getTierIcon(sponsor.tier)}
                                  <span className="text-sm font-bold text-black">{sponsor.tier} Sponsor</span>
                                </div>
                                <span className="text-xs text-gray-500">{sponsor.sponsorshipLevel}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Details */}
                        <div className="flex-1">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Benefits */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-yellow-400" />
                                Sponsorship Benefits
                              </h4>
                              <ul className="space-y-3">
                                {sponsor.benefits.map((benefit, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    className="flex items-center gap-3 text-gray-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    {benefit}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-purple-400" />
                                Key Features
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {sponsor.features.map((feature, idx) => (
                                  <motion.span
                                    key={idx}
                                    className={`inline-flex items-center bg-gradient-to-r ${sponsor.color} bg-opacity-20 border border-current border-opacity-20 rounded-full px-3 py-1 text-xs font-medium text-white`}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    {feature}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Expandable Details */}
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: selectedSponsor === sponsor.id ? "auto" : 0,
                              opacity: selectedSponsor === sponsor.id ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-6"
                          >
                            <div className="border-t border-gray-700/50 pt-6">
                              <p className="text-gray-300 leading-relaxed mb-4">{sponsor.longDescription}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span>Founded: {sponsor.founded}</span>
                                <span>•</span>
                                <span>Category: {sponsor.category}</span>
                                <span>•</span>
                                <span>Size: {sponsor.size}</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${sponsor.color} opacity-5 pointer-events-none rounded-lg`} />
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h3 
              className="text-center text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text"
              variants={scaleIn}
            >
              Gold Sponsors
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedSponsors.filter(sponsor => sponsor.tier === 'Gold').map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.id} 
                  sponsor={sponsor} 
                  index={index}
                  selectedSponsor={selectedSponsor}
                  setSelectedSponsor={setSelectedSponsor}
                  getTierGradient={getTierGradient}
                  getTierIcon={getTierIcon}
                />
              ))}
            </div>
          </motion.div>

          {/* Silver & Bronze Sponsors */}
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="text-center text-2xl font-bold mb-8 bg-gradient-to-r from-gray-400 to-orange-500 text-transparent bg-clip-text"
              variants={scaleIn}
            >
              Supporting Partners
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedSponsors.filter(sponsor => sponsor.tier === 'Silver' || sponsor.tier === 'Bronze').map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.id} 
                  sponsor={sponsor} 
                  index={index}
                  selectedSponsor={selectedSponsor}
                  setSelectedSponsor={setSelectedSponsor}
                  getTierGradient={getTierGradient}
                  getTierIcon={getTierIcon}
                  compact={true}
                />
              ))}
            </div>
          </motion.div>        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-20"
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Become a Sponsor
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partner with us to support innovation and connect with talented developers. 
              Join leading companies in shaping the future of technology and discover the next generation of innovators.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:sponsors@hackhub.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg border border-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Building className="h-5 w-5" />
                Partner With Us
                <ExternalLink className="h-4 w-4" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-5 w-5" />
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Reusable SponsorCard Component
interface SponsorCardProps {
  sponsor: typeof sponsors[0];
  index: number;
  selectedSponsor: number | null;
  setSelectedSponsor: (id: number | null) => void;
  getTierGradient: (tier: string) => string;
  getTierIcon: (tier: string) => JSX.Element;
  compact?: boolean;
}

function SponsorCard({ 
  sponsor, 
  index, 
  selectedSponsor, 
  setSelectedSponsor, 
  getTierGradient, 
  getTierIcon, 
  compact = false 
}: SponsorCardProps) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideInLeft : slideInRight}
      whileHover={{ scale: 1.02, z: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="cursor-pointer"
      onClick={() => setSelectedSponsor(selectedSponsor === sponsor.id ? null : sponsor.id)}
    >
      <CardSpotlight className={`h-full ${sponsor.bgColor} ${sponsor.borderColor} backdrop-blur-xl hover:${sponsor.glowColor} transition-all duration-500 ${selectedSponsor === sponsor.id ? 'ring-2 ring-cyan-400/50' : ''}`}>
        <div className={`relative z-10 ${compact ? 'p-6' : 'p-8'}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getTierGradient(sponsor.tier)} rounded-full px-3 py-2`}>
              {getTierIcon(sponsor.tier)}
              <span className="text-xs font-bold text-black">{sponsor.tier}</span>
            </div>
            <motion.a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Logo & Info */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xl font-bold text-black">{sponsor.logo}</span>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{sponsor.name}</h3>
              <p className="text-gray-400 text-sm">{sponsor.description}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-400" />
              Benefits
            </h4>
            <ul className="space-y-2">
              {sponsor.benefits.slice(0, compact ? 3 : 4).map((benefit, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center gap-3 text-gray-300 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {sponsor.features.slice(0, compact ? 2 : 4).map((feature, idx) => (
                <motion.span
                  key={idx}
                  className={`inline-flex items-center bg-gradient-to-r ${sponsor.color} bg-opacity-20 border border-current border-opacity-20 rounded-full px-2 py-1 text-xs font-medium text-white`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Expandable Details */}
          <motion.div
            initial={false}
            animate={{ 
              height: selectedSponsor === sponsor.id ? "auto" : 0,
              opacity: selectedSponsor === sponsor.id ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <div className="border-t border-gray-700/50 pt-4">
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{sponsor.longDescription}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                <span>Founded: {sponsor.founded}</span>
                <span>•</span>
                <span>{sponsor.category}</span>
                <span>•</span>
                <span>{sponsor.size}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${sponsor.color} opacity-5 pointer-events-none rounded-lg`} />
      </CardSpotlight>
    </motion.div>
  );
}
