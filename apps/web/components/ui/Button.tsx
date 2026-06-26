import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
};

export default function Button({
  children,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="
      w-full
      rounded-xl
      bg-blue-600
      py-3.5
      font-semibold
      text-white
      transition-all
      duration-200
      hover:scale-[1.02]
      hover:bg-blue-500
      active:scale-95
    "
    >
      {children}
    </button>
  );
}