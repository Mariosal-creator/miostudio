"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

let preloaderAudioContext: AudioContext | null = null;
let preloaderAudioUnlocked = false;

function getAudioContext() {
  if (typeof window === "undefined") {
    return null;
  }

  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!preloaderAudioContext) {
    preloaderAudioContext = new AudioContextClass();
  }

  return preloaderAudioContext;
}

async function unlockPreloaderAudio() {
  const audioContext = getAudioContext();

  if (!audioContext) {
    return false;
  }

  try {
    if (audioContext.state !== "running") {
      await audioContext.resume();
    }

    preloaderAudioUnlocked = audioContext.state === "running";
    return preloaderAudioUnlocked;
  } catch {
    return false;
  }
}

function playPreloaderSound() {
  const audioContext = getAudioContext();

  if (!audioContext || !preloaderAudioUnlocked || audioContext.state !== "running") {
    return;
  }

  try {
    const master = audioContext.createGain();
    const whoosh = audioContext.createOscillator();
    const whooshGain = audioContext.createGain();
    const whooshFilter = audioContext.createBiquadFilter();
    const startTime = audioContext.currentTime;
    const endTime = startTime + 0.48;

    whoosh.type = "sine";
    whoosh.frequency.setValueAtTime(180, startTime);
    whoosh.frequency.exponentialRampToValueAtTime(460, startTime + 0.22);
    whoosh.frequency.exponentialRampToValueAtTime(240, endTime);

    whooshFilter.type = "bandpass";
    whooshFilter.frequency.setValueAtTime(900, startTime);
    whooshFilter.frequency.exponentialRampToValueAtTime(1400, startTime + 0.25);
    whooshFilter.frequency.exponentialRampToValueAtTime(800, endTime);
    whooshFilter.Q.value = 0.7;

    whooshGain.gain.setValueAtTime(0.0001, startTime);
    whooshGain.gain.exponentialRampToValueAtTime(0.055, startTime + 0.08);
    whooshGain.gain.exponentialRampToValueAtTime(0.018, startTime + 0.28);
    whooshGain.gain.exponentialRampToValueAtTime(0.0001, endTime);

    master.gain.value = 0.82;

    whoosh.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(master);
    master.connect(audioContext.destination);

    whoosh.start(startTime);
    whoosh.stop(endTime);

    window.setTimeout(() => {
      master.disconnect();
      whooshGain.disconnect();
      whooshFilter.disconnect();
    }, 700);
  } catch {
    return;
  }
}

export default function GlobalPreloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const unlockAudio = () => {
      unlockPreloaderAudio().catch(() => undefined);
    };

    unlockAudio();
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio);

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  useEffect(() => {
    setVisible(true);
    unlockPreloaderAudio()
      .then((unlocked) => {
        if (unlocked) {
          playPreloaderSound();
        }
      })
      .catch(() => undefined);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground animate-fadeIn">
      <div className="flex w-[220px] flex-col items-center justify-center gap-4 text-center">
        <div className="preloader-logo-stage">
          <div className="camera-icon" aria-hidden="true">
            <span className="camera-half camera-half-left">
              <span className="camera-reel camera-reel-left" />
              <span className="camera-viewfinder" />
            </span>
            <span className="camera-half camera-half-right">
              <span className="camera-reel camera-reel-right" />
              <span className="camera-lens" />
            </span>
          </div>

          <div className="logo-from-camera">
            <Image
              src="/logohead.png"
              alt="Logo"
              width={170}
              height={55}
              priority
              className="preloader-logo-image"
            />
          </div>
        </div>
        <div className="preloader-progress" role="status" aria-label="Cargando sitio">
          <span className="preloader-progress-fill" />
        </div>
      </div>
    </div>
  );
}