"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-10 max-w-sm w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-500">Sign in to your Merchant Dashboard</p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition rounded-md py-2 px-4 shadow"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>

          
        </div>

        <p className="text-sm text-gray-400">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-600">
            Terms
          </a>
        </p>
      </div>
    </div>
  );
}
