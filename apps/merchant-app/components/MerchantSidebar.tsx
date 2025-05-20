"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { SidebarItem } from "./SidebarItem";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/Avatar";
import RequireAuth from "./RequireAuth";

export default function MerchantSidebar() {
  const { data: session } = useSession();


  const merchant = session?.merchant;

  return (
    <aside className="w-64 bg-background h-full flex flex-col justify-between">
      <div className="pl-3 pt-3 pb-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Wallet Icon" width={42} height={42} />
          <span className="text-2xl font-bold text-black">Walleti</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        <SidebarItem href="/dashboard" icon={<HomeIcon />} title="Dashoboard" />
        <SidebarItem
          href="/transactions"
          icon={<TransactionsIcon />}
          title="Transactions"
        />
        <SidebarItem href="/profile" icon={<ProfileIcon />} title="Profile" />
      </nav>
      
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <Avatar className="rounded-2xl text-blue-700 capitalize">
              <AvatarImage src={merchant?.image ?? "/avatar.png"} alt="User" />
              <AvatarFallback className="rounded-2xl border">
                {merchant?.name?.[0] ?? "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-black capitalize truncate">
                {merchant?.name ?? "User"}
              </p>
              <p className="text-xs truncate">
                {merchant?.upi ?? "upi"}
              </p>
            </div>
          </div>
          <button
            className="mt-2 w-full flex items-center justify-start mb-3"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOutIcon />
            <span className="ml-2">Logout</span>
          </button>
        </div>
      
    </aside>
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
