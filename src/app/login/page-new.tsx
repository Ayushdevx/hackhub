"use client";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-md p-8 space-y-6 rounded-lg shadow-2xl bg-zinc-900">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome to HackHub
            </h1>
            <p className="text-zinc-300 mt-2">
              Authentication system coming soon
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => router.push('/')}
              className="w-full py-3 font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 rounded-full"
            >
              Continue as Guest
            </Button>
            
            <Button 
              onClick={() => router.push('/setup')}
              variant="outline"
              className="w-full py-3 font-semibold border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full"
            >
              Setup Profile
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
