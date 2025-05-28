"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await signIn("credentials", {
      redirect: false,
      phone,
      password,
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/home");
    } else {
      setMessage("Signup/Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Sign Up / Sign In"}
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-sm text-red-500">{message}</div>
        )}
      </div>
    </div>
  );
}
