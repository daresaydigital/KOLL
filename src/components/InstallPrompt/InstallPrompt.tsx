"use client";

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(true);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // ✅ Detect if the device is iOS
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";
    const iOS = /iPad|iPhone|iPod/.test(userAgent);
    setIsIOS(iOS);

    const android = /Android/.test(userAgent);
    setIsAndroid(android);
  }, []);

  if (!showPrompt) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        padding: "10px 20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        zIndex: 1000,
      }}
    >
      {isIOS && (
        <span>
          📲 Install this app:
          <>
            {" "}
            Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>
          </>
        </span>
      )}

      {isAndroid && (
        <span>
          📲 Install this app:
          <>
            {" "}
            Tap <strong>More</strong> → <strong>Add page to</strong> →{" "}
            <strong>Home screen</strong>
          </>
        </span>
      )}
      <button
        onClick={() => setShowPrompt(false)}
        style={{
          marginLeft: "10px",
          background: "transparent",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>
  );
}
