"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks: { name: string; path: string; newTab?: boolean; scroll?: boolean }[] = [
    { name: "HOME", path: "/" },
    { name: "MODELS", path: "/model-hub/breast-cancer" },
    { name: "DATA UPLOAD", path: "/data-upload" },
    { name: "API DOCS", path: "/api-docs" },
  ];

  const rightNavLinks: { name: string; path: string; newTab?: boolean; scroll?: boolean }[] = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" }
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
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl mx-4">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-HachathonHub-500 to-HachathonHub-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:block">
                HackHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  target={link.newTab ? "_blank" : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full",
                    pathname === link.path
                      ? "text-HachathonHub-400"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 h-full w-full rounded-full bg-HachathonHub-100/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button className="bg-HachathonHub-600 hover:bg-HachathonHub-700 text-white px-6 py-2 rounded-lg">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[4999] md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200",
                      pathname === link.path
                        ? "text-HachathonHub-400 bg-HachathonHub-100/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-HachathonHub-600 hover:bg-HachathonHub-700 text-white py-3 rounded-xl">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
