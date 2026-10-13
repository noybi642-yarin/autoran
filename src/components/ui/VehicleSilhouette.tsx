/**
 * Generic, brand-neutral SUV line drawing used ONLY as a placeholder until
 * authorised vehicle photography is supplied. It intentionally does not
 * depict any real model. Faces left — the reading direction in RTL.
 */
export function VehicleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 240"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <ellipse cx="320" cy="214" rx="290" ry="9" fill="currentColor" stroke="none" opacity="0.12" />
      <g transform="translate(640 0) scale(-1 1)" strokeWidth="2.25">
        {/* Body */}
        <path d="M42 176 V128 C42 114 52 104 66 98 L118 78 C126 70 136 64 150 62 L392 58 C408 58 420 62 432 70 L488 104 L572 116 C590 119 602 130 604 146 V168 C604 175 599 180 592 180 H544 A54 54 0 0 0 436 180 H204 A54 54 0 0 0 96 180 H52 C46 180 42 178 42 176 Z" />
        {/* Glasshouse */}
        <path d="M112 112 L150 78 C156 74 162 72 170 72 L384 69 C396 69 406 72 416 78 L470 108 Z" />
        <path d="M286 70 V110" />
        {/* Shoulder line and door cut */}
        <path d="M56 126 L586 132" opacity="0.55" />
        <path d="M300 112 V178" opacity="0.55" />
        <path d="M352 140 h22" />
        <path d="M208 140 h22" />
        {/* Lamps */}
        <path d="M570 124 L600 134" strokeWidth="4" />
        <path d="M44 116 H70" strokeWidth="4" />
        {/* Wheels */}
        <circle cx="150" cy="182" r="42" />
        <circle cx="150" cy="182" r="20" opacity="0.6" />
        <circle cx="490" cy="182" r="42" />
        <circle cx="490" cy="182" r="20" opacity="0.6" />
      </g>
    </svg>
  );
}
