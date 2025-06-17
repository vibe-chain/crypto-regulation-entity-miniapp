"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface ScreenLayoutProps {
  title: string;
  onNavigate: (screen: string) => void;
  children: React.ReactNode;
}

export default function ScreenLayout({ title, onNavigate, children }: ScreenLayoutProps) {
  return (
    <div className="font-serif">
      <div className="min-h-screen bg-gray-100 px-6 py-6 text-black">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-2 p-2 h-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <ArrowLeft />
            </button>
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="w-8" />
          </div>
          <hr className="border-gray-400 mb-6" />
          {children}
        </div>
      </div>
    </div>
  );
}
