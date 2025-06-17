"use client";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function ToggleSwitch({ isOn, onToggle }: ToggleSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground w-12 h-6 rounded-full p-0 ${isOn ? "bg-gray-800 text-gray-50" : "bg-gray-200 text-black"}`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform ${isOn ? "translate-x-3" : "-translate-x-3"}`}
      />
    </button>
  );
}
