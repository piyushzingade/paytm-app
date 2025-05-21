"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

type SidebarItemProps = {
  href?: string;
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
  collapsed?: boolean;
};

export const SidebarItem = ({
  href,
  title,
  icon,
  onClick,
  collapsed = false,
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
      className={clsx(
        "flex items-center cursor-pointer rounded-xl px-3 py-2 transition-colors duration-200 group",
        selected
          ? "bg-slate-100 font-semibold text-[#6a51a6]"
          : "hover:bg-slate-50 text-slate-700"
      )}
    >
      <div className={clsx("text-xl", collapsed ? "mx-auto" : "mr-3")}>
        {icon}
      </div>
      {!collapsed && (
        <span className="text-md capitalize transition-opacity duration-200">
          {title}
        </span>
      )}
    </div>
  );
};
