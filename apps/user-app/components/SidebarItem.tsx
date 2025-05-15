"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  href?: string;
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
};

export const SidebarItem = ({
  href,
  title,
  icon,
  onClick,
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
      className={`hover:text-[#6a51a6] flex ${selected ? "text-[#6a51a6]" : "text-slate-500"} cursor-pointer p-2 pl-8`}
      onClick={handleClick}
    >
      <div className="pr-2">{icon}</div>
      <div
        className={`font-bold ${selected ? "text-[#6a51a6]" : "text-slate-500"}`}
      >
        {title}
      </div>
    </div>
  );
};
