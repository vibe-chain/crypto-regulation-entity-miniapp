"use client";

import { useState, useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import HomeScreen from "@/app/components/screens/HomeScreen";
import SettingsScreen from "@/app/components/screens/SettingsScreen";

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

  return (
    <div className="relative">
      <div className={`absolute inset-0 ${!hasNavigated ? (currentScreen === "home" ? "opacity-100" : "opacity-0 pointer-events-none") : (currentScreen === "home" ? "animate-screen-fade-in" : "animate-screen-fade-out pointer-events-none")}`}>
        <HomeScreen onNavigate={handleNavigate} />
      </div>
      <div className={`absolute inset-0 ${!hasNavigated ? (currentScreen === "settings" ? "opacity-100" : "opacity-0 pointer-events-none") : (currentScreen === "settings" ? "animate-screen-fade-in" : "animate-screen-fade-out pointer-events-none")}`}>
        <SettingsScreen onNavigate={handleNavigate} />
      </div>
    </div>
  );
}