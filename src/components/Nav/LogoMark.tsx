/**
 * LogoMark — inline SVG recreation of the United Guardian shield/wordmark.
 *
 * Built as an inline SVG so that:
 *  - CSS custom properties (--gold-500, --ink-950, etc.) resolve correctly
 *  - next/font-loaded fonts (--font-display, --font-mono) are available
 *  - No PNG white-box artifacts or filter hacks needed
 *
 * viewBox: 0 0 490 124
 *   · Shield mark:  x 0–110,  y 0–124
 *   · Divider:      x 120
 *   · Wordmark:     x 132–490
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 124"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* ── DECORATIVE RING behind shield ──────────────────────────────────── */}
      {/* Two concentric strokes that peek out around the shield edges */}
      <circle cx="55" cy="62" r="66" fill="none" stroke="var(--gold-700)" strokeWidth="2.5" opacity="0.55" />
      <circle cx="55" cy="62" r="70" fill="none" stroke="var(--gold-500)" strokeWidth="1"   opacity="0.25" />

      {/* ── SHIELD — outer border (gold) ───────────────────────────────────── */}
      <path
        d="M 4,4 L 106,4 L 106,78 Q 55,122 55,122 Q 55,122 4,78 Z"
        fill="var(--gold-700)"
      />

      {/* ── SHIELD — inner fill (dark navy) ────────────────────────────────── */}
      <path
        d="M 11,11 L 99,11 L 99,76 Q 55,114 55,114 Q 55,114 11,76 Z"
        fill="var(--ink-900)"
      />

      {/* ── SHIELD — inner concentric border (subtle gold ring) ────────────── */}
      <path
        d="M 11,11 L 99,11 L 99,76 Q 55,114 55,114 Q 55,114 11,76 Z"
        fill="none"
        stroke="var(--gold-700)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* ── SPARTAN WARRIOR — plume ────────────────────────────────────────── */}
      {/* Tall swept-back crest rising from the dome apex */}
      <path
        d="M 51,16 L 49,6 Q 55,-2 61,6 L 59,16 Z"
        fill="var(--gold-300)"
      />
      {/* Plume mounting collar at dome top */}
      <rect x="48" y="14" width="14" height="5" rx="2" fill="var(--gold-300)" />

      {/* ── SPARTAN WARRIOR — helmet dome ──────────────────────────────────── */}
      {/* Arch from y≈18 (apex) down to y≈56 (base of dome / top of face) */}
      <path
        d="M 27,56 C 27,33 39,18 55,17 C 71,18 83,33 83,56 Z"
        fill="var(--gold-300)"
      />

      {/* Dome shading — slightly darker gold band at the base of the arch */}
      <path
        d="M 27,56 C 27,48 35,44 55,44 C 75,44 83,48 83,56 Z"
        fill="var(--gold-500)"
        opacity="0.5"
      />

      {/* ── SPARTAN WARRIOR — cheek / face guards ──────────────────────────── */}
      {/* Left guard: extends dome outward and down the left cheek */}
      <path
        d="M 27,56 L 22,75 Q 22,85 31,87 L 41,89 L 41,62 Z"
        fill="var(--gold-500)"
      />
      {/* Right guard: mirror */}
      <path
        d="M 83,56 L 88,75 Q 88,85 79,87 L 69,89 L 69,62 Z"
        fill="var(--gold-500)"
      />

      {/* ── SPARTAN WARRIOR — face plate (dark, covers face center) ────────── */}
      <path
        d="M 41,50 L 69,50 L 69,89 Q 55,97 41,89 Z"
        fill="var(--ink-950)"
      />

      {/* ── SPARTAN WARRIOR — brow / eye-slit openings ─────────────────────── */}
      {/* These dark triangular shapes cut into the dome, framing the face. */}
      {/* Left eye area */}
      <path
        d="M 27,48 L 41,48 L 41,57 Q 34,59 27,56 Z"
        fill="var(--ink-950)"
      />
      {/* Right eye area */}
      <path
        d="M 83,48 L 69,48 L 69,57 Q 76,59 83,56 Z"
        fill="var(--ink-950)"
      />

      {/* ── SPARTAN WARRIOR — nose bridge ──────────────────────────────────── */}
      {/* Thin vertical element that bisects the face plate */}
      <rect x="52" y="50" width="6" height="33" rx="3" fill="var(--ink-800)" />

      {/* ── SPARTAN WARRIOR — armored shoulders / cape hint ────────────────── */}
      {/* Two small curved pauldron shapes flanking the cheek guards */}
      <path
        d="M 14,90 Q 14,82 22,82 L 36,84 L 34,96 Q 20,98 14,90 Z"
        fill="var(--gold-700)"
        opacity="0.8"
      />
      <path
        d="M 96,90 Q 96,82 88,82 L 74,84 L 76,96 Q 90,98 96,90 Z"
        fill="var(--gold-700)"
        opacity="0.8"
      />

      {/* ── HOUSE / ROOF ICON — bottom of shield ───────────────────────────── */}
      {/* Chevron roof */}
      <path
        d="M 46,106 L 55,97 L 64,106 Z"
        fill="var(--gold-300)"
      />
      {/* Building body */}
      <rect x="48" y="106" width="14" height="8" rx="1" fill="var(--gold-300)" />
      {/* Window cross — matches the original's grid window */}
      <rect x="51" y="107" width="8" height="6" rx="0.5" fill="var(--ink-900)" />
      <line x1="55" y1="107" x2="55" y2="113" stroke="var(--gold-300)" strokeWidth="1" />
      <line x1="51" y1="110" x2="59" y2="110" stroke="var(--gold-300)" strokeWidth="1" />

      {/* ── DIVIDER LINE ───────────────────────────────────────────────────── */}
      <line
        x1="120" y1="12"
        x2="120" y2="112"
        stroke="var(--gold-700)"
        strokeWidth="1.5"
      />

      {/* ── WORDMARK ───────────────────────────────────────────────────────── */}
      {/* "UNITED" — warm white, display serif */}
      <text
        x="133" y="50"
        fontFamily="var(--font-display)"
        fontSize="40"
        fontWeight="700"
        fill="var(--paper-50)"
        letterSpacing="3"
      >
        UNITED
      </text>

      {/* "GUARDIAN" — brass gold, display serif */}
      <text
        x="133" y="91"
        fontFamily="var(--font-display)"
        fontSize="40"
        fontWeight="700"
        fill="var(--gold-500)"
        letterSpacing="3"
      >
        GUARDIAN
      </text>

      {/* "ROOFING & CONSTRUCTION" — slate, monospace label */}
      <text
        x="135" y="109"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="400"
        fill="var(--slate-500)"
        letterSpacing="2.5"
      >
        ROOFING &amp; CONSTRUCTION
      </text>
    </svg>
  );
}
