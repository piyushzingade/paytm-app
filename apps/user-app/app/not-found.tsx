// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        404
      </h1>
      <p className="text-2xl text-black  mb-6">
        Oops! Page not found.
      </p>
      <Link
        href="/home"
        className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
      >
        Go back home
      </Link>
    </div>
  );
}
