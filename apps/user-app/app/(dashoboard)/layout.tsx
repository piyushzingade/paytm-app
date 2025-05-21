"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar with state control */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content grows naturally */}
        <main className="flex-1 bg-[#f9fafb] p-6 border rounded-xl  mr-3 transition-all duration-300">
          {children}
        </main>
    </div>
  );
}
