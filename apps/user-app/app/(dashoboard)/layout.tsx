import { JSX } from "react";

import Sidebar from "../../components/Sidebar";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex  bg-white">
      <div className="w-64  bg-white min-h-screen  pt-6 flex flex-col justify-between">
        {/* Sidebar Header */}
        <Sidebar />
      </div>

      <div className="rounded-xl border p-3 my-3 bg-[#f9fafb]">{children}</div>
    </div>
  );
}


