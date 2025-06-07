"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Calendar, Clock, Users, MapPin, Award, Play, Pause, ChevronRight, Zap, Trophy, Coffee, Code, Presentation, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const schedule = [
  {
    id: 1,
    time: "9:00 AM",
    date: "June 21",
    event: "Registration & Welcome",
    description: "Check-in, team formation, and opening ceremony. Get your swag bags and meet fellow innovators!",
    details: ["Registration opens", "Welcome kit distribution", "Team formation activities", "Opening ceremony"],
    icon: <Users className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    category: "Welcome",
    status: "upcoming",
    duration: "1.5 hours",
    location: "Main Hall"
  },
  {
    id: 2,
    time: "10:30 AM",
    date: "June 21",
    event: "Keynote & Challenge Reveal",
    description: "Industry insights and hackathon theme announcement from leading tech experts",
    details: ["Industry keynote speakers", "Challenge theme reveal", "Sponsor presentations", "Q&A session"],
    icon: <Presentation className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    category: "Presentation",
    status: "upcoming",
    duration: "1 hour",
    location: "Auditorium"
  },
  {
    id: 3,
    time: "12:00 PM",
    date: "June 21",
    event: "Hacking Begins!",
    description: "51 hours of intensive coding and innovation starts now. Let the magic happen!",
    details: ["Development phase starts", "Mentor availability begins", "Resource access unlocked", "Support channels open"],
    icon: <Code className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/20",
    category: "Development",
    status: "active",
    duration: "51 hours",
    location: "Virtual Workspace"
  },
  {
    id: 4,
    time: "6:00 PM",
    date: "June 22",
    event: "Mentor Check-ins & Coffee Break",
    description: "Get guidance from industry experts and recharge with fellow hackers",
    details: ["One-on-one mentor sessions", "Technical guidance", "Coffee & networking", "Progress sharing"],
    icon: <Coffee className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    category: "Support",
    status: "upcoming",
    duration: "2 hours",
    location: "Mentorship Lounge"
  },
  {
    id: 5,
    time: "3:00 PM",
    date: "June 23",
    event: "Submissions Due",
    description: "Final project submissions and demos. Show off your incredible work!",
    details: ["Project submission deadline", "Demo video upload", "Final documentation", "Peer review begins"],
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-500 to-pink-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/20",
    category: "Submission",
    status: "upcoming",
    duration: "1 hour",
    location: "Submission Portal"
  },
  {
    id: 6,
    time: "5:00 PM",
    date: "June 23",
    event: "Awards Ceremony",
    description: "Winners announcement and closing celebration. Celebrate your achievements!",
    details: ["Project presentations", "Judging results", "Prize distribution", "Networking celebration"],
    icon: <Trophy className="h-6 w-6" />,
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    category: "Awards",
    status: "upcoming",
    duration: "2 hours",
    location: "Main Stage"
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

const timelineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};

export function Schedule() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  const progressOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  // Client-side only effect
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance through timeline events
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        const next = prev + 1;
        return next >= schedule.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Calculate event progress
  const getEventProgress = (index: number) => {
    if (schedule[index].status === "active") return 100;
    if (schedule[index].status === "completed") return 100;
    if (currentProgress > index) return 100;
    if (currentProgress === index) return 50;
    return 0;
  };

  return (
    <section id="schedule" className="relative py-20 overflow-hidden" ref={timelineRef}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.15),transparent_70%)]" />
        {/* Animated particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              animate={{
                x: [0, (i * 50) % 1000],
                y: [0, (i * 40) % 800],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + (i % 5),
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: (i * 5) % 100 + "%",
                top: (i * 4) % 100 + "%",
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
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-full px-8 py-4 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Calendar className="h-6 w-6 text-indigo-400" />
            <span className="text-indigo-300 font-bold text-lg">Event Timeline</span>
            <Sparkles className="h-5 w-5 text-pink-400" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hackathon Schedule
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            51 hours of non-stop innovation, coding, and collaboration. Join us for an unforgettable journey!
          </motion.p>

          {/* Auto-play control */}
          <motion.button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 text-cyan-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoPlay ? "Pause Timeline" : "Play Timeline"}
          </motion.button>
        </motion.div>

        {/* Enhanced Timeline */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full" />
            
            {/* Progress indicator */}
            <motion.div
              ref={progressRef}
              className="absolute left-8 md:left-12 top-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full origin-top"
              style={{ height: progressHeight, opacity: progressOpacity }}
            />
            
            {/* Enhanced Schedule Items */}
            <div className="space-y-12">
              {schedule.map((item, index) => {
                const progress = getEventProgress(index);
                const isSelected = selectedEvent === item.id;
                const isActive = item.status === "active";
                
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, z: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative flex items-start gap-8 cursor-pointer"
                    onClick={() => setSelectedEvent(isSelected ? null : item.id)}
                  >
                    {/* Enhanced Timeline Dot */}
                    <motion.div 
                      className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl ${item.glowColor} flex-shrink-0 border-4 border-white/20`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      animate={isActive ? { 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 20px rgba(99,102,241,0.3)",
                          "0 0 40px rgba(99,102,241,0.6)",
                          "0 0 20px rgba(99,102,241,0.3)"
                        ]
                      } : {}}
                    >
                      <motion.div
                        animate={isActive ? { rotate: [0, 360] } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      {/* Progress ring */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="32"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                          fill="none"
                        />
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="32"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray={201.06}
                          strokeDashoffset={201.06 - (201.06 * progress) / 100}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    
                    {/* Enhanced Content Card */}
                    <div className="flex-1">
                      <motion.div
                        layout
                        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border ${item.borderColor} transition-all duration-500 ${isSelected ? 'ring-2 ring-cyan-400/50' : ''}`}
                        whileHover={{ 
                          boxShadow: `0 20px 60px -12px ${item.color.includes('blue') ? 'rgba(59,130,246,0.3)' : item.color.includes('purple') ? 'rgba(139,92,246,0.3)' : item.color.includes('green') ? 'rgba(34,197,94,0.3)' : item.color.includes('yellow') ? 'rgba(245,158,11,0.3)' : item.color.includes('red') ? 'rgba(239,68,68,0.3)' : 'rgba(139,92,246,0.3)'}`,
                        }}
                      >
                        <div className="relative z-10 p-6 md:p-8">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${item.color} rounded-full px-3 py-1 text-xs font-bold text-black`}>
                                  {item.category}
                                </span>
                                <span className="text-gray-400 text-sm">
                                  {item.duration} • {item.location}
                                </span>
                              </div>
                              
                              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                                {item.event}
                              </h3>
                              
                              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                {item.description}
                              </p>

                              {/* Expandable details */}
                              <motion.div
                                initial={false}
                                animate={{ 
                                  height: isSelected ? "auto" : 0,
                                  opacity: isSelected ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="border-t border-gray-700/50 pt-4 mt-4">
                                  <h4 className="text-cyan-400 font-semibold mb-3">Event Details:</h4>
                                  <ul className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                      >
                                        <ChevronRight className="h-4 w-4 text-cyan-400" />
                                        {detail}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            </div>
                            
                            {/* Enhanced Time Badge */}
                            <div className="text-right flex-shrink-0 ml-6">
                              <motion.div 
                                className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} rounded-2xl px-6 py-3 mb-2 shadow-lg`}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Clock className="h-5 w-5 text-black" />
                                <span className="text-sm font-bold text-black">{item.time}</span>
                              </motion.div>
                              <div className="text-gray-400 text-sm font-medium">{item.date}</div>
                              
                              {isActive && (
                                <motion.div
                                  className="mt-2 text-green-400 text-xs font-bold flex items-center gap-1"
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                                  LIVE NOW
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 pointer-events-none`} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Important Info Section */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Essential Information
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="h-10 w-10 text-cyan-400" />,
                  title: "Virtual Event",
                  description: "Join from anywhere in the world",
                  gradient: "from-cyan-500 to-blue-500",
                  detail: "Platform: Discord & Zoom"
                },
                {
                  icon: <Users className="h-10 w-10 text-green-400" />,
                  title: "Team Size",
                  description: "2-6 members per team",
                  gradient: "from-green-500 to-emerald-500",
                  detail: "Individual participation allowed"
                },
                {
                  icon: <Clock className="h-10 w-10 text-purple-400" />,
                  title: "Duration",
                  description: "51 hours of hacking",
                  gradient: "from-purple-500 to-pink-500",
                  detail: "Non-stop innovation"
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 60px -12px rgba(99,102,241,0.3)"
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {info.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-2">{info.description}</p>
                  <p className="text-sm text-gray-400">{info.detail}</p>
                  
                  {/* Hover effect gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
