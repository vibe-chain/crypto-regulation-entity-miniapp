"use client";
import ScreenLayout from "@/app/components/layout/ScreenLayout";

export default function StatsScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <ScreenLayout title="Statistics" onNavigate={onNavigate}>
      <div className="text-center text-gray-500 py-10">Statistics placeholder</div>
    </ScreenLayout>
  );
}
