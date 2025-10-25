// components/LogoMark.tsx
export default function LogoMark({ size = 90 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 0.78)}
      viewBox="0 0 512 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo OTIAdriver"
    >
      {/* Caminhão (azul) */}
      <path
        d="M40 200 h210 v-110 h-140 c-15 0-25 10-30 22 l-40 88 z
           m40 55 a35 35 0 1 0 70 0 a35 35 0 1 0 -70 0 z"
        fill="#0A58B0"
      />
      <rect x="145" y="110" width="70" height="55" rx="6" fill="#ffffff" />
      <rect x="80" y="225" width="140" height="20" rx="4" fill="#0A58B0" />

      {/* Ônibus (verde) */}
      <g transform="translate(230,-10)">
        <rect x="110" y="110" width="150" height="110" rx="18" fill="#17A489" />
        <rect x="120" y="120" width="130" height="70" rx="8" fill="#ffffff" />
        <rect x="125" y="200" width="120" height="18" rx="6" fill="#17A489" />
        <circle cx="145" cy="235" r="28" fill="#17A489" />
        <circle cx="245" cy="235" r="28" fill="#17A489" />
      </g>

      {/* “Sombra” curva */}
      <path
        d="M350 240 c-25 25 -40 45 -50 70 c20 12 45 12 70 0 c10-25 15-45 20-70 z"
        fill="#C7CCD6"
        opacity="0.9"
      />

      {/* Carro (azul + verde) */}
      <g transform="translate(60,240)">
        <path
          d="M10 70 c40-40 140-60 240-55 c55 3 95 18 130 45 c-10 15-25 25-45 28
             h-255 c-25 0-45-6-70-18 z"
          fill="#0A58B0"
        />
        <path
          d="M140 70 c25-28 65-40 120-40 c35 0 60 5 85 18 c-5 12-15 20-30 22
             h-175 z"
          fill="#17A489"
        />
        <circle cx="110" cy="95" r="24" fill="#ffffff" />
        <circle cx="350" cy="95" r="24" fill="#ffffff" />
        <circle cx="110" cy="95" r="16" fill="#0A58B0" />
        <circle cx="350" cy="95" r="16" fill="#0A58B0" />
      </g>
    </svg>
  );
}
