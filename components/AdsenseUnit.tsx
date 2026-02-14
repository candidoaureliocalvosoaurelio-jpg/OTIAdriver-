"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdsenseUnit({ slot }: { slot: string }) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    pushedRef.current = true;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {}
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: 1100 }}
        data-ad-client="ca-pub-1193667681913467"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
