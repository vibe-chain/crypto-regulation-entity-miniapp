import { ReactNode } from "react";

interface GameButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function GameButton({ children, icon, onClick }: GameButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-4/5 h-12 text-base font-serif border-2 rounded-md border-gray-800 bg-transparent text-black hover:bg-gray-800 hover:text-gray-50 transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
