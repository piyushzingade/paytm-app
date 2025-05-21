"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  href?: string;
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
  collapsed: boolean;
};

export const SidebarItem = ({
  href,
  title,
  icon,
  onClick,
  collapsed,
}: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center cursor-pointer p-3 rounded-xl transition-colors ${
        collapsed ? "justify-center" : "space-x-3"
      } ${
        selected ? "bg-slate-100 font-semibold text-black" : "hover:bg-slate-50"
      }`}
    >
      <div>{icon}</div>
      {!collapsed && (
        <div className="text-md text-slate-700 capitalize">{title}</div>
      )}
    </div>
  );
};
