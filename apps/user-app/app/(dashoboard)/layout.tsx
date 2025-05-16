// app/(dashboard)/layout.tsx or similar path
import { JSX } from "react";
import Sidebar from "../../components/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar (fixed width) */}
      <div className="w-64 bg-white ">
        <Sidebar />
      </div>

      {/* Main Content (fills rest of the space) */}
      <main className="flex-1 bg-[#f9fafb] p-6 border rounded-xl my-3 mr-3">{children}</main>
    </div>
  );
}
