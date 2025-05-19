// app/(dashboard)/layout.tsx or similar path
import { JSX } from "react";
import MerchantSidebar from "../../components/MerchantSidebar";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar (fixed width) */}
      <div className="w-64 bg-white ">
        <MerchantSidebar />
      </div>

      {/* Main Content (fills rest of the space) */}
      <main className="flex-1 bg-[#f9fafb] p-6 border rounded-xl my-3 mr-3">
        {children}
      </main>
    </div>
  );
}
