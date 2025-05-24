"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SetupPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md p-8 space-y-6 rounded-lg shadow-2xl bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            Setup Complete
          </h1>
          <p className="text-zinc-300 mt-2">
            Your profile setup is complete. Welcome to HackHub!
          </p>
        </div>
        
        <Button 
          onClick={() => router.push('/')}
          className="w-full py-2 font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 rounded-full"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}
