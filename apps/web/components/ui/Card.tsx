import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/80
      backdrop-blur-xl
      p-10
      shadow-2xl
    "
    >
      {children}
    </div>
  );
}