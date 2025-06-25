"use client";

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { User, MapPin, Award, ExternalLink, Linkedin, Twitter, Globe } from "lucide-react";

const judges = [
  {
    id: 1,
    name: "Hitesh Laxmichand Patel",
    title: "Senior Applied Scientist and Team Lead",
    company: "Oracle",
    location: "California, USA",
    expertise: ["Applied Science", "Machine Learning", "Team Leadership"],
    bio: "Senior Applied Scientist and Team Lead at Oracle with extensive experience in developing enterprise-scale AI solutions and leading cross-functional teams.",
    image: "/judge1.jpg",
    achievements: "Enterprise AI Solutions, Team Leadership",
    social: {
      linkedin: "https://linkedin.com/in/hiteshpatel",
      twitter: "https://twitter.com/hiteshpatel",
      website: "https://hiteshpatel.dev"
    },
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    name: "Satwik Reddy Jambula",
    title: "Senior Application Developer",
    company: "Uber Technologies",
    location: "San Francisco, CA",
    expertise: ["Application Development", "Scalable Systems", "Mobile Technology"],
    bio: "Senior Application Developer at Uber Technologies, specializing in building scalable ride-sharing and delivery platforms that serve millions of users globally.",
    image: "/judge1.jpg",
    achievements: "Scalable Platform Development, Mobile Apps",
    social: {
      linkedin: "https://linkedin.com/in/satwikjambula",
      twitter: "https://twitter.com/satwikjambula",
      website: "https://satwikjambula.dev"
    },
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    id: 3,
    name: "Monish Alur Gowdru",
    title: "Security Consultant",
    company: "Black Duck",
    location: "Massachusetts, USA",
    expertise: ["Cybersecurity", "Security Consulting", "Vulnerability Assessment"],
    bio: "Security Consultant at Black Duck with expertise in cybersecurity solutions, vulnerability management, and enterprise security architecture.",
    image: "/judge1.jpg",
    achievements: "Cybersecurity Expert, Security Consulting",
    social: {
      linkedin: "https://linkedin.com/in/monishgowdru",
      twitter: "https://twitter.com/monishgowdru",
      website: "https://monishgowdru.dev"
    },
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 4,
    name: "Apoorwa Joshi",
    title: "Security Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    expertise: ["Security Engineering", "Cloud Security", "Infrastructure Protection"],
    bio: "Security Engineer at Amazon focused on cloud security and infrastructure protection for AWS services, ensuring robust security for millions of users.",
    image: "/judge1.jpg",
    achievements: "Cloud Security Expert, AWS Infrastructure",
    social: {
      linkedin: "https://linkedin.com/in/apoorwajoshi",
      twitter: "https://twitter.com/apoorwajoshi",
      website: "https://apoorwajoshi.dev"
    },
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    id: 5,
    name: "Ayush Upadhyay",
    title: "AI Developer",
    company: "Nokia",
    location: "Finland",
    expertise: ["Artificial Intelligence", "Software Development", "Network Technologies"],
    bio: "AI Developer at Nokia working on intelligent network solutions and telecommunications AI applications, driving innovation in network technologies.",
    image: "/judge1.jpg",
    achievements: "AI Network Solutions, Telecommunications",
    social: {
      linkedin: "https://linkedin.com/in/ayushupadhyay",
      twitter: "https://twitter.com/ayushupadhyay",
      website: "https://ayushupadhyay.dev"
    },
    color: "from-indigo-500 to-purple-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
  },
  {
    id: 6,
    name: "Punya Mittal",
    title: "AI Intern",
    company: "IIT Ropar",
    location: "Punjab, India",
    expertise: ["Artificial Intelligence", "Research", "Academic Projects"],
    bio: "AI Intern at IIT Ropar with focus on cutting-edge AI research and academic innovation projects, contributing to the future of artificial intelligence.",
    image: "/judge1.jpg",
    achievements: "AI Research, Academic Innovation",
    social: {
      linkedin: "https://linkedin.com/in/punyamittal",
      twitter: "https://twitter.com/punyamittal",
      website: "https://punyamittal.dev"
    },
    color: "from-teal-500 to-cyan-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
  },
  {
    id: 7,
    name: "Preetham Kaukuntla",
    title: "Staff Data Scientist",
    company: "Glassdoor",
    location: "California, USA",
    expertise: ["Data Science", "Machine Learning", "Analytics", "Statistical Modeling"],
    bio: "Staff Data Scientist at Glassdoor with extensive experience in building data-driven solutions, advanced analytics, and machine learning models that impact millions of job seekers and companies worldwide.",
    image: "/preetham-kaukuntla.jpg",
    achievements: "Data Science Leadership, ML at Scale",
    social: {
      linkedin: "https://www.linkedin.com/in/preetham-kaukuntla-a43841105/",
      twitter: "https://twitter.com/preethamkaukuntla",
      website: "https://preethamkaukuntla.dev"
    },
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
];

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

export function Judges() {
  return (
    <section id="judges" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_70%)]" />
      
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
            className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Award className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Expert Panel</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Meet Our Judges
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Industry leaders and tech visionaries who will evaluate your projects and provide valuable feedback
          </p>
        </motion.div>

        {/* Judges Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {judges.map((judge) => (
            <motion.div
              key={judge.id}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <CardSpotlight className={`h-full ${judge.bgColor} ${judge.borderColor} backdrop-blur-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="relative z-10 p-8">
                  {/* Profile Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Avatar */}
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${judge.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <User className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Basic Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-white mb-1 truncate">{judge.name}</h3>
                      <p className={`font-semibold bg-gradient-to-r ${judge.color} bg-clip-text text-transparent mb-2`}>
                        {judge.title}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">{judge.company}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="h-4 w-4" />
                        {judge.location}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{judge.bio}</p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {judge.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${judge.color} text-black`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-sm">Achievements</span>
                    </div>
                    <p className="text-gray-300 text-sm">{judge.achievements}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Connect:</span>
                    <div className="flex gap-3">
                      <motion.a
                        href={judge.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={judge.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={judge.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Judging Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Innovation", description: "Creativity and originality", weight: "25%" },
                { title: "Technical Excellence", description: "Code quality and implementation", weight: "25%" },
                { title: "Impact", description: "Real-world problem solving", weight: "25%" },
                { title: "Presentation", description: "Demo and communication", weight: "25%" },
              ].map((criteria, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{criteria.weight}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{criteria.title}</h4>
                  <p className="text-gray-400 text-sm">{criteria.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
