import Script from "next/script";

export default function GoogleAdsenseScript() {
  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1193667681913467"
      crossOrigin="anonymous"
    />
  );
}
