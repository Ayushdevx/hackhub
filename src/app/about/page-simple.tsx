"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 relative">
            <div>
              <span className="inline-block px-6 py-2 bg-black/80 text-cyan-400 rounded-full text-sm mb-6 backdrop-blur-lg border border-cyan-400/30">
                About HackathonHub
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Our Mission and Vision
              </h1>
              <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
                Empowering innovation through collaborative hackathons and cutting-edge technology
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-cyan-400">Our Mission</h2>
            </div>
            <div className="p-8 rounded-2xl border border-cyan-400/20 bg-gray-800/50">
              <p className="text-lg text-gray-300 mb-6">
                HackathonHub is dedicated to revolutionizing the hackathon experience through innovative technology and collaborative platforms. We believe in making hackathons more accessible, engaging, and impactful for participants worldwide.
              </p>
              <p className="text-lg text-gray-300">
                Our platform enables developers, designers, and innovators to collaborate, learn, and create groundbreaking solutions through exciting hackathon events.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
