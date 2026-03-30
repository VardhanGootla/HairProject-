export default function BrandMark({ size = 40 }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl bg-brand-green/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={Math.max(18, Math.round(size * 0.55))}
        height={Math.max(18, Math.round(size * 0.55))}
        viewBox="0 0 24 24"
        className="text-brand-green"
        role="img"
        aria-label="HairCare Clinic"
      >
        <defs>
          <linearGradient id="hc_mark" x1="2" y1="2" x2="22" y2="22">
            <stop offset="0" stopColor="#00A67E" stopOpacity="1" />
            <stop offset="1" stopColor="#3A86FF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Soft diamond outline */}
        <path
          d="M12 2.5 L20.5 12 L12 21.5 L3.5 12 Z"
          fill="none"
          stroke="url(#hc_mark)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Minimal “hair strand” curve */}
        <path
          d="M7.6 12.2 C 9.2 8.8, 14.6 8.2, 16.4 11.1 C 17.3 12.6, 16.7 14.3, 15.5 15.3 C 13.9 16.7, 11 16.4, 9.5 15.2"
          fill="none"
          stroke="url(#hc_mark)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

