"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled? : boolean
}

export const Button = ({ onClick, children  , className}: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={`${className}`}>
      {children}
    </button>

  );
};