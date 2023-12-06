import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
};

export function Button({
  children,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className="relative rounded bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 transition-all active:top-[1px]"
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
