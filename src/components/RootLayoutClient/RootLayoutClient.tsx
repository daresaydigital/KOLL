"use client";

import { useEffect, useState } from "react";
import InstallPrompt from "@/components/InstallPrompt/InstallPrompt";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const _isStandalone =
      typeof window !== "undefined" &&
      window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(_isStandalone);
  }, []);

  useEffect(() => {
    if (isStandalone) {
      document.body.classList.add("pwa-mode");
    } else {
      document.body.classList.remove("pwa-mode");
    }
  }, [isStandalone]);

  return (
    <>
      {!isStandalone && <InstallPrompt />}
      {children}
    </>
  );
}
