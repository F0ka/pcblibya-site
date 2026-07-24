/**
 * Decorative gerber-art panel for the hero: hand-drawn SVG with
 * routed traces (stroke-draw animation), pads, a QFP footprint
 * outline and silkscreen markings. Purely presentational.
 */
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-label="Decorative PCB trace artwork"
      className="h-auto w-full"
    >
      {/* board outline */}
      <rect
        x="8"
        y="8"
        width="504"
        height="384"
        rx="4"
        fill="none"
        stroke="var(--color-trace-dim)"
        strokeWidth="2"
      />
      {/* fiducials */}
      <circle cx="34" cy="34" r="7" fill="none" stroke="var(--color-copper)" strokeWidth="2" />
      <circle cx="486" cy="366" r="7" fill="none" stroke="var(--color-copper)" strokeWidth="2" />

      {/* QFP footprint */}
      <g stroke="var(--color-trace)" strokeWidth="2" fill="none">
        <rect x="200" y="140" width="120" height="120" rx="2" />
        <rect x="228" y="168" width="64" height="64" fill="var(--color-panel)" />
        <circle cx="244" cy="184" r="4" fill="var(--color-trace)" stroke="none" />
        {/* pins */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i}>
            <line x1={212 + i * 14} y1="140" x2={212 + i * 14} y2="124" />
            <line x1={212 + i * 14} y1="260" x2={212 + i * 14} y2="276" />
            <line x1="200" y1={152 + i * 14} x2="184" y2={152 + i * 14} />
            <line x1="320" y1={152 + i * 14} x2="336" y2={152 + i * 14} />
          </g>
        ))}
      </g>

      {/* routed traces with draw animation */}
      <g
        stroke="var(--color-trace)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      >
        <path
          className="trace-animate"
          style={{ ["--trace-len" as string]: 340 }}
          d="M60 90 H140 L180 130"
        />
        <path
          className="trace-animate trace-animate-delay"
          style={{ ["--trace-len" as string]: 420 }}
          d="M60 320 H160 L212 268"
        />
        <path
          className="trace-animate"
          style={{ ["--trace-len" as string]: 300 }}
          d="M460 100 H400 L352 148"
        />
        <path
          className="trace-animate trace-animate-delay"
          style={{ ["--trace-len" as string]: 380 }}
          d="M460 330 H380 L336 286"
        />
      </g>
      {/* copper trace accent */}
      <path
        d="M60 250 H120 L150 220"
        stroke="var(--color-copper)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* pads */}
      <g fill="var(--color-board)" stroke="var(--color-trace)" strokeWidth="2">
        <circle cx="60" cy="90" r="6" />
        <circle cx="60" cy="320" r="6" />
        <circle cx="460" cy="100" r="6" />
        <circle cx="460" cy="330" r="6" />
        <circle cx="60" cy="250" r="6" stroke="var(--color-copper)" />
      </g>
      {/* vias along traces */}
      <g fill="var(--color-trace)">
        <circle cx="180" cy="130" r="4" />
        <circle cx="212" cy="268" r="4" />
        <circle cx="352" cy="148" r="4" />
        <circle cx="336" cy="286" r="4" />
      </g>

      {/* silkscreen text */}
      <text
        x="34"
        y="376"
        fill="var(--color-muted)"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="15"
        letterSpacing="2"
      >
        PCB-LY-001 REV A
      </text>
      <text
        x="486"
        y="60"
        fill="var(--color-muted)"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="13"
        letterSpacing="2"
        textAnchor="end"
      >
        J1
      </text>
    </svg>
  );
}
