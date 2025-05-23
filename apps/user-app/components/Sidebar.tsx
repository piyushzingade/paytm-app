"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, LogOut, Menu, Mail } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { SidebarItem } from "./SidebarItem";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/Avatar";

export default function Sidebar() {
  const session = useSession();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="h-full">
      <SidebarItem
        href="/home"
        icon={<HomeIcon />}
        title="Home"
        collapsed={collapsed}
      />
      <SidebarItem
        href="/transfer"
        icon={<TransferIcon />}
        title="Transfer"
        collapsed={collapsed}
      />
      <SidebarItem
        href="/transaction"
        icon={<TransactionsIcon />}
        title="Transactions"
        collapsed={collapsed}
      />
      <SidebarItem
        href="/p2pTransfer"
        icon={<P2PTransferIcon />}
        title="P2P Transfer"
        collapsed={collapsed}
      />
      <SidebarItem
        href="/profile"
        icon={<ProfileIcon />}
        title="Profile"
        collapsed={collapsed}
      />
    </div>
  );

  const footer = (
    <div className="p-4 border-t">
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "space-x-3"
        }`}
      >
        <Avatar className="rounded-2xl text-blue-700 capitalize">
          <AvatarImage
            src={session?.data?.user?.image ?? "/avatar.png"}
            alt="User"
          />
          <AvatarFallback className="rounded-2xl border">
            {session?.data?.user?.name?.charAt(0) ?? "U"}
          </AvatarFallback>
        </Avatar>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-black truncate capitalize">
              {session?.data?.user?.name ?? "User"}
            </p>
            <p className="text-xs truncate text-muted-foreground">
              {session?.data?.user?.email ?? "user@example.com"}
            </p>
          </div>
        )}
      </div>
      <button
        className={`mt-2 w-full flex items-center justify-start ${
          collapsed ? "justify-center" : ""
        }`}
        onClick={() => signOut({ callbackUrl: "/signin" })}
      >
        <LogOut size={20} />
        {!collapsed && <span className="ml-2">Logout</span>}
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button - only shows when sidebar is closed */}
      {!mobileOpen && (
        <div className="sm:hidden fixed top-4 left-4 z-50">
          <button
            className="p-2 bg-white rounded-md shadow"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden sm:flex flex-col justify-between h-screen bg-white transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 mt-2">
          <div
            className={`flex items-center ${
              collapsed ? "justify-center w-full" : "space-x-3"
            }`}
          >
            {!collapsed && (
              <>
                <Image src="/logo.png" alt="Logo" width={36} height={36} />
                <span className="text-lg font-bold text-black">Walleti</span>
              </>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-black transition"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <nav className="flex-1 space-y-1 px-2">{sidebarContent}</nav>
        {footer}
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex sm:hidden">
          <div className="w-64 bg-white shadow-lg h-full flex flex-col justify-between">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Wallet Icon"
                  width={36}
                  height={36}
                />
                <span className="text-lg font-bold text-black">Walleti</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-500 hover:text-black"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2">{sidebarContent}</nav>
            {footer}
          </div>
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
}


function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2PTransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
      />
    </svg>
  );
}

function LogOutIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
      />
    </svg>
  );
}
