"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Dynamically import the EarthCanvas component to avoid SSR issues
const EarthCanvas = dynamic(() => import("@/components/canvas/Earth"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
  ),
});

export default function EarthDemoPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/patterns/hexagon-grid.svg')] opacity-20 animate-pulse-soft" />
          <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.svg')] opacity-30 mix-blend-overlay animate-pan" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-20">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-['Kagitingan'] mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                3D Earth Component
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Interactive 3D Earth model built with React Three.js
              </p>
              <Link href="/">
                <Button variant="outline" className="mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Earth Component Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[600px] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-black/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
              <EarthCanvas />
              
              {/* Control Instructions */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                <p className="text-cyan-400 font-semibold mb-1">Controls:</p>
                <p>• Auto-rotation enabled</p>
                <p>• Drag to orbit</p>
                <p>• Zoom disabled</p>
              </div>
            </motion.div>

            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/80 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Technology</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• React Three.js (@react-three/fiber)</li>
                  <li>• Three.js Drei (@react-three/drei)</li>
                  <li>• GLTF 3D Model Loading</li>
                  <li>• Orbit Controls</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/80 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Auto-rotation animation</li>
                  <li>• Interactive orbit controls</li>
                  <li>• Responsive design</li>
                  <li>• Loading progress indicator</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/80 border border-pink-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Note</h3>
                <p className="text-gray-300">
                  Currently using a placeholder model. Add your `scene.gltf` file to 
                  `/public/planet/` directory to display the actual Earth model.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
