"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconMenu2, IconX, IconStar, IconHeart, IconCode, IconBolt, IconCalendar, IconUsers, IconTrophy } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks: { name: string; path: string; icon?: any; description?: string }[] = [
    { 
      name: "HOME", 
      path: "/", 
      icon: IconBolt,
      description: "Welcome to HackHub"
    },
    { 
      name: "ABOUT", 
      path: "/about", 
      icon: IconHeart,
      description: "Learn more about us"
    },
    { 
      name: "SCHEDULE", 
      path: "#schedule", 
      icon: IconCalendar,
      description: "View event timeline"
    },
    { 
      name: "SPONSORS", 
      path: "#sponsors", 
      icon: IconStar,
      description: "Meet our sponsors"
    },
    { 
      name: "JUDGES", 
      path: "#judges", 
      icon: IconUsers,
      description: "Meet our expert judges"
    },
    { 
      name: "PRIZES", 
      path: "#prizes", 
      icon: IconTrophy,
      description: "View amazing prizes"
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-4 inset-x-0 max-w-7xl mx-auto z-[5000] transition-all duration-300",
          visible && "top-2"
        )}
      >
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl mx-4 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <IconBolt className="text-white h-5 w-5" />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  HackHub
                </span>
                <div className="text-xs text-gray-400 font-medium">
                  Innovation Platform
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      if (link.path.startsWith('#')) {
                        e.preventDefault();
                        const element = document.getElementById(link.path.substring(1));
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full group flex items-center space-x-2",
                      pathname === link.path
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    {pathname === link.path && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    <Icon className="h-4 w-4 relative z-20 group-hover:scale-110 transition-transform duration-200" />
                    <span className="relative z-20">{link.name}</span>
                    
                    {/* Enhanced Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 border border-white/10">
                      {link.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-white/10 rotate-45"></div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://hackhub-01.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*979e3a*_gcl_au*MTEwMDU0MTYwNS4xNzQ2NzI5NDM0*_ga*OTc0MDY1NDYuMTc0NjcyOTQzNA..*_ga_0YHJK3Y10M*czE3NDc5MDUwNzckbzIzJGcxJHQxNzQ3OTA1MjIyJGowJGwwJGgw" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                    Register Now
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconX className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconMenu2 className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[4999] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1
              }}
              className="fixed top-20 right-4 bottom-4 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl z-[5000] md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"
              />
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.path}
                        onClick={(e) => {
                          if (link.path.startsWith('#')) {
                            e.preventDefault();
                            const element = document.getElementById(link.path.substring(1));
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }
                          setIsMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 group",
                          pathname === link.path
                            ? "text-purple-400 bg-purple-500/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="pt-4 border-t border-white/10">
                  <Link href="https://hackhub-01.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*979e3a*_gcl_au*MTEwMDU0MTYwNS4xNzQ2NzI5NDM0*_ga*OTc0MDY1NDYuMTc0NjcyOTQzNA..*_ga_0YHJK3Y10M*czE3NDc5MDUwNzckbzIzJGcxJHQxNzQ3OTA1MjIyJGowJGwwJGgw" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
