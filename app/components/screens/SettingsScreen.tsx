"use client";

import { useState } from "react";
import GameButton from "@/app/components/buttons/GameButton";
import { ArrowLeft, Volume2, Vibrate, Bell, Shield, Info } from "lucide-react";
import ToggleSwitch from "@/app/components/buttons/ToggleSwitch";

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const [soundEffects, setSoundEffects] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="font-serif">
      <div className="min-h-screen bg-gray-100 px-6 py-6">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-6 text-black">
            <button
              onClick={() => onNavigate("home")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md p-2"
            >
              <ArrowLeft />
            </button>
            <h2 className="text-lg font-serif font-bold text-black">
              SETTINGS
            </h2>
            <div className="w-8" />
          </div>
          <hr className="border-gray-400 mb-6" />
          <div className="space-y-6 text-black">
            <div>
              <h3 className="text-base font-serif font-bold mb-4">
                Audio & Feedback
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-400">
                  <div className="flex items-center gap-3">
                    <Volume2 size={20} />
                    <div>
                      <div className="text-sm font-serif font-medium">
                        Sound Effects
                      </div>
                      <div className="text-xs font-serif text-gray-600">
                        Enable audio feedback
                      </div>
                    </div>
                  </div>
                  <ToggleSwitch
                    isOn={soundEffects}
                    onToggle={() => setSoundEffects(!soundEffects)}
                  />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-400">
                  <div className="flex items-center gap-3">
                    <Vibrate size={20} />
                    <div>
                      <div className="text-sm font-serif font-medium">
                        Haptic Feedback
                      </div>
                      <div className="text-xs font-serif text-gray-600">
                        Vibration on interactions
                      </div>
                    </div>
                  </div>
                  <ToggleSwitch
                    isOn={hapticFeedback}
                    onToggle={() => setHapticFeedback(!hapticFeedback)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-serif font-bold mb-4">
                Notifications
              </h3>
              <div className="flex items-center justify-between py-3 border-b border-gray-400">
                <div className="flex items-center gap-3">
                  <Bell size={20} />
                  <div>
                    <div className="text-sm font-serif font-medium">
                      Game Updates
                    </div>
                    <div className="text-xs font-serif text-gray-600">
                      New scenarios and features
                    </div>
                  </div>
                </div>
                <ToggleSwitch
                  isOn={notifications}
                  onToggle={() => setNotifications(!notifications)}
                />
              </div>
            </div>
            <div>
              <h3 className="text-base font-serif font-bold mb-4">Privacy</h3>
              <div className="flex items-center justify-between py-3 border-b border-gray-400">
                <div className="flex items-center gap-3">
                  <Shield size={20} />
                  <div>
                    <div className="text-sm font-serif font-medium">
                      Analytics
                    </div>
                    <div className="text-xs font-serif text-gray-600">
                      Help improve the game
                    </div>
                  </div>
                </div>
                <ToggleSwitch
                  isOn={analytics}
                  onToggle={() => setAnalytics(!analytics)}
                />
              </div>
            </div>
            {/* About */}
            <div>
              <h3 className="text-base font-serif font-bold mb-4">About</h3>
              <div className="space-y-3">
                <button
                  onClick={() => console.log("Clicked: App Information")}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full h-12 justify-start text-left font-serif border-2 border-gray-800 bg-transparent text-black hover:bg-gray-800 hover:text-gray-50 transition-colors"
                >
                  <Info size={18} className="mr-3" />
                  <div>
                    <div className="text-sm font-medium">App Information</div>
                    <div className="text-xs text-gray-600">Version 0.1.0</div>
                  </div>
                </button>
                <button
                  onClick={() => console.log("Clicked: Privacy Policy")}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full h-12 justify-start text-left font-serif border-2 border-gray-800 bg-transparent text-black hover:bg-gray-800 hover:text-gray-50 transition-colors"
                >
                  <Shield size={18} className="mr-3" />
                  <div>
                    <div className="text-sm font-medium">Privacy Policy</div>
                    <div className="text-xs text-gray-600">
                      How we handle your data
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-400">
            <button
              onClick={() => console.log("Clicked: Reset All Data")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background px-4 py-2 w-full h-12 text-base font-serif border-2 border-red-600 text-red-600 hover:bg-red-700 hover:text-white transition-colors"
            >
              RESET ALL DATA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
