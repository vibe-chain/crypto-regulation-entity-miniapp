"use client";

import { Trophy, Play, BarChart3, Settings } from "lucide-react";
import GameButton from "@/app/components/buttons/GameButton";

interface Props {
  onNavigate: (screen: string) => void;
}

export default function HomePage({ onNavigate }: Props) {
  return (
    <div className="font-serif">
      <div className="min-h-screen bg-gray-100 px-6 py-6">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-between items-center mb-3 text-xs font-serif text-gray-700">
              <span>News</span>
              <div className="flex gap-2 items-center">
                <span>Markets</span>
                <span>•</span>
                <span>Technology</span>
              </div>
                <span>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <hr className="border-gray-400 mb-6" />
          </div>

          <div className="text-center mb-8 text-black">
            <h1 className="text-3xl font-bold font-serif leading-tight mb-6">
              CRYPTO
              <br />
              REGULATION
              <br />
              ENTITY
            </h1>
            <hr className="border-gray-400 mb-6" />
          </div>

          <div className="mb-8 text-black">
            <p className="text-sm font-serif leading-relaxed text-center mb-6">
              Navigate the complex world of cryptocurrency regulation. Make strategic decisions that will shape the future
              of digital assets and blockchain technology.
            </p>
            <hr className="border-gray-400 mb-6" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <GameButton icon={<Play size={18} />} onClick={() => onNavigate("game")}>START NEW GAME</GameButton>
            <GameButton>CONTINUE GAME</GameButton>
            <GameButton icon={<Trophy size={18} />} onClick={() => onNavigate("leaderboard")}>LEADERBOARD</GameButton>
            <GameButton icon={<BarChart3 size={18} />} onClick={() => onNavigate("stats")}>STATISTICS</GameButton>
            <GameButton icon={<Settings size={18} />} onClick={() => onNavigate("settings")}>SETTINGS</GameButton>
          </div>
        </div>
      </div>
    </div>
  )
}
