"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GlobalPreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground animate-fadeIn">
      <div className="flex w-[220px] flex-col items-center justify-center gap-4 text-center">
        <div className="animate-logo-float-pulse">
          <Image
            src="/logohead.png"
            alt="Logo"
            width={170}
            height={55}
            priority
          />
        </div>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
        <p className="w-full text-center text-sm font-medium tracking-[0.12em] uppercase">
          Cargando…
        </p>
      </div>
    </div>
  );
}