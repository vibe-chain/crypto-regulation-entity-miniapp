"use client";
import ScreenLayout from "@/app/components/layout/ScreenLayout";

export default function LeaderboardScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <ScreenLayout title="Leaderboard" onNavigate={onNavigate}>
      <div className="text-center text-gray-500 py-10">Leaderboard placeholder</div>
    </ScreenLayout>
  );
}
