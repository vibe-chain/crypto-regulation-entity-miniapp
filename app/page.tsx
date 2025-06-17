"use client";

import { useState, useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import HomeScreen from "@/app/components/screens/HomeScreen";
import SettingsScreen from "@/app/components/screens/SettingsScreen";
import LeaderboardScreen from "@/app/components/screens/LeaderboardScreen";
import StatsScreen from "@/app/components/screens/StatsScreen";

export default function Page() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady])

  const [currentScreen, setCurrentScreen] = useState("home");
  const [hasNavigated, setHasNavigated] = useState(false);
  const handleNavigate = (screen: string) => {
    if (!hasNavigated) setHasNavigated(true);
    setCurrentScreen(screen);
  };

  const screens: Record<string, React.FC<{ onNavigate: (s: string) => void }>> = {
    home: HomeScreen,
    settings: SettingsScreen,
    leaderboard: LeaderboardScreen,
    stats: StatsScreen,
  };

  return (
    <div className="relative">
      {Object.entries(screens).map(([key, Screen]) => (
        <div
          key={key}
          className={`absolute inset-0 ${!hasNavigated
            ? (currentScreen === key ? "opacity-100" : "opacity-0 pointer-events-none")
            : (currentScreen === key ? "animate-screen-fade-in" : "animate-screen-fade-out pointer-events-none")}`}
        >
          <Screen onNavigate={handleNavigate} />
        </div>
      ))}
    </div>
  );
}