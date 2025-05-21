"use client";

import { useState } from "react";
import MerchantSidebar from "../../components/MerchantSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <MerchantSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="flex-1 bg-[#f9fafb] p-6 border rounded-xl mr-3 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
