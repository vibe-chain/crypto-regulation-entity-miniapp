"use client";

import { useState, useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import HomeScreen from "@/app/components/screens/HomeScreen";

export default function Page() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady])

  const [currentScreen, setCurrentScreen] = useState("home");
  const handleNavigate = (screen: string) => setCurrentScreen(screen);

  return (
    <>
      {currentScreen === "home" && <HomeScreen onNavigate={handleNavigate} />}
    </>
  );
}