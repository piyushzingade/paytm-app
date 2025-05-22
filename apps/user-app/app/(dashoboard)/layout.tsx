
import Sidebar from "../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  

  return (
    <div className="flex min-h-screen bg-white">

      <Sidebar/>

      {/* Main content grows naturally */}
      <main className="flex-1 min-h-screen  bg-[#f9fafb] p-6 border rounded-xl  transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
