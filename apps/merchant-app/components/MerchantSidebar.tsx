"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/Avatar";
import { SidebarItem } from "./SidebarItem";

export default function MerchantSidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const { data: session } = useSession();
  const merchant = session?.merchant;

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 flex flex-col justify-between bg-white h-screen `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center w-full" : "space-x-3"
          }`}
        >
          {!collapsed && (
            <Image
              src="/logo.png"
              alt="Wallet Icon"
              width={36}
              height={36}
              className="w-9 h-9"
              priority
            />
          )}
          {!collapsed && (
            <span className="text-lg font-bold text-black">Walleti</span>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-gray-500 hover:text-black transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2">
        <SidebarItem
          href="/dashboard"
          icon={<HomeIcon />}
          title="Dashboard"
          collapsed={collapsed}
        />
        <SidebarItem
          href="/transactions"
          icon={<TransactionsIcon />}
          title="Transactions"
          collapsed={collapsed}
        />
        <SidebarItem
          href="/profile"
          icon={<ProfileIcon />}
          title="Profile"
          collapsed={collapsed}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "space-x-3"
          }`}
        >
          <Avatar className="rounded-2xl text-blue-700 capitalize">
            <AvatarImage src={merchant?.image ?? "/avatar.png"} alt="User" />
            <AvatarFallback className="rounded-2xl border">
              {merchant?.name?.[0] ?? "U"}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-black capitalize truncate">
                {merchant?.name ?? "User"}
              </p>
              <p className="text-xs truncate">{merchant?.upi ?? "upi"}</p>
            </div>
          )}
        </div>
        <button
          className={`mt-2 w-full flex items-center text-sm font-medium text-red-500 ${
            collapsed ? "justify-center" : "justify-start space-x-2"
          }`}
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

// Icons
function ProfileIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
