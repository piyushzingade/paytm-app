"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  href?: string;
  icon?: React.ReactNode;
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
      className={`hover:bg-slate-50 flex rounded-xl cursor-pointer p-2 pl-2`}
      onClick={handleClick}
    >
      <div className="pr-2">{icon}</div>
      <div className="text-md font-medium text-slate-700 capitalize">
        {title}
      </div>
    </div>
  );
};
