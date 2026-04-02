import { createSpriteSet, SpriteSet } from './types';

const catColor = '#FFA500';
const darkColor = '#FF8C00';

// Idle animation frames
const idleFrames = [
  <svg key="idle-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="42" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="34" r="6" fill={catColor} />
    <circle cx="44" cy="34" r="6" fill={catColor} />
    <path d="M 18 30 L 14 22 L 22 28" fill={darkColor} />
    <path d="M 46 30 L 50 22 L 42 28" fill={darkColor} />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 44 L 32 48" stroke="black" strokeWidth="1.5" />
    <path d="M 28 48 Q 32 49 36 48" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="48" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="idle-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="41" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="33" r="6" fill={catColor} />
    <circle cx="44" cy="33" r="6" fill={catColor} />
    <path d="M 18 29 L 14 21 L 22 27" fill={darkColor} />
    <path d="M 46 29 L 50 21 L 42 27" fill={darkColor} />
    <circle cx="26" cy="39" r="2" fill="black" />
    <circle cx="38" cy="39" r="2" fill="black" />
    <ellipse cx="32" cy="43" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 43 L 32 47" stroke="black" strokeWidth="1.5" />
    <path d="M 28 47 Q 32 48 36 47" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="47" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="49" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="49" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="47" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="idle-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="42" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="34" r="6" fill={catColor} />
    <circle cx="44" cy="34" r="6" fill={catColor} />
    <path d="M 18 30 L 14 22 L 22 28" fill={darkColor} />
    <path d="M 46 30 L 50 22 L 42 28" fill={darkColor} />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 44 L 32 48" stroke="black" strokeWidth="1.5" />
    <path d="M 28 48 Q 32 49 36 48" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="48" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="idle-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="43" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="35" r="6" fill={catColor} />
    <circle cx="44" cy="35" r="6" fill={catColor} />
    <path d="M 18 31 L 14 23 L 22 29" fill={darkColor} />
    <path d="M 46 31 L 50 23 L 42 29" fill={darkColor} />
    <circle cx="26" cy="41" r="2" fill="black" />
    <circle cx="38" cy="41" r="2" fill="black" />
    <ellipse cx="32" cy="45" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 45 L 32 49" stroke="black" strokeWidth="1.5" />
    <path d="M 28 49 Q 32 50 36 49" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="49" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="51" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="51" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="49" width="4" height="8" rx="2" fill={catColor} />
  </svg>
];

// Walking animation frames
const walkFrames = [
  <svg key="walk-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="42" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="34" r="6" fill={catColor} />
    <circle cx="44" cy="34" r="6" fill={catColor} />
    <path d="M 18 30 L 14 22 L 22 28" fill={darkColor} />
    <path d="M 46 30 L 50 22 L 42 28" fill={darkColor} />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 44 L 32 48" stroke="black" strokeWidth="1.5" />
    <path d="M 28 48 Q 32 49 36 48" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="9" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="23" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="37" y="52" width="4" height="8" rx="2" fill={catColor} />
    <rect x="51" y="50" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="walk-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="41" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="33" r="6" fill={catColor} />
    <circle cx="44" cy="33" r="6" fill={catColor} />
    <path d="M 18 29 L 14 21 L 22 27" fill={darkColor} />
    <path d="M 46 29 L 50 21 L 42 27" fill={darkColor} />
    <circle cx="26" cy="39" r="2" fill="black" />
    <circle cx="38" cy="39" r="2" fill="black" />
    <ellipse cx="32" cy="43" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 43 L 32 47" stroke="black" strokeWidth="1.5" />
    <path d="M 28 47 Q 32 48 36 47" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="8" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="22" y="51" width="4" height="8" rx="2" fill={catColor} />
    <rect x="38" y="49" width="4" height="8" rx="2" fill={catColor} />
    <rect x="52" y="52" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="walk-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="40" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="32" r="6" fill={catColor} />
    <circle cx="44" cy="32" r="6" fill={catColor} />
    <path d="M 18 28 L 14 20 L 22 26" fill={darkColor} />
    <path d="M 46 28 L 50 20 L 42 26" fill={darkColor} />
    <circle cx="26" cy="38" r="2" fill="black" />
    <circle cx="38" cy="38" r="2" fill="black" />
    <ellipse cx="32" cy="42" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 42 L 32 46" stroke="black" strokeWidth="1.5" />
    <path d="M 28 46 Q 32 47 36 46" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="52" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="46" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="54" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="48" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="walk-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="42" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="34" r="6" fill={catColor} />
    <circle cx="44" cy="34" r="6" fill={catColor} />
    <path d="M 18 30 L 14 22 L 22 28" fill={darkColor} />
    <path d="M 46 30 L 50 22 L 42 28" fill={darkColor} />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 44 L 32 48" stroke="black" strokeWidth="1.5" />
    <path d="M 28 48 Q 32 49 36 48" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="11" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="25" y="52" width="4" height="8" rx="2" fill={catColor} />
    <rect x="35" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="49" y="52" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="walk-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="43" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="35" r="6" fill={catColor} />
    <circle cx="44" cy="35" r="6" fill={catColor} />
    <path d="M 18 31 L 14 23 L 22 29" fill={darkColor} />
    <path d="M 46 31 L 50 23 L 42 29" fill={darkColor} />
    <circle cx="26" cy="41" r="2" fill="black" />
    <circle cx="38" cy="41" r="2" fill="black" />
    <ellipse cx="32" cy="45" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 45 L 32 49" stroke="black" strokeWidth="1.5" />
    <path d="M 28 49 Q 32 50 36 49" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="12" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="26" y="49" width="4" height="8" rx="2" fill={catColor} />
    <rect x="34" y="51" width="4" height="8" rx="2" fill={catColor} />
    <rect x="48" y="48" width="4" height="8" rx="2" fill={catColor} />
  </svg>,
  <svg key="walk-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="44" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="36" r="6" fill={catColor} />
    <circle cx="44" cy="36" r="6" fill={catColor} />
    <path d="M 18 32 L 14 24 L 22 30" fill={darkColor} />
    <path d="M 46 32 L 50 24 L 42 30" fill={darkColor} />
    <circle cx="26" cy="42" r="2" fill="black" />
    <circle cx="38" cy="42" r="2" fill="black" />
    <ellipse cx="32" cy="46" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 46 L 32 50" stroke="black" strokeWidth="1.5" />
    <path d="M 28 50 Q 32 51 36 50" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="13" y="52" width="4" height="8" rx="2" fill={catColor} />
    <rect x="27" y="46" width="4" height="8" rx="2" fill={catColor} />
    <rect x="33" y="54" width="4" height="8" rx="2" fill={catColor} />
    <rect x="47" y="50" width="4" height="8" rx="2" fill={catColor} />
  </svg>
];

// Click animation frames (happy/playful)
const clickFrames = [
  <svg key="click-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="38" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="30" r="6" fill={catColor} />
    <circle cx="44" cy="30" r="6" fill={catColor} />
    <path d="M 18 26 L 14 18 L 22 24" fill={darkColor} />
    <path d="M 46 26 L 50 18 L 42 24" fill={darkColor} />
    <path d="M 23 36 Q 26 33 29 36" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35 36 Q 38 33 41 36" stroke="black" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="40" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 40 L 32 44" stroke="black" strokeWidth="1.5" />
    <path d="M 26 46 Q 32 50 38 46" stroke="black" strokeWidth="2" fill="none" />
    <rect x="10" y="48" width="4" height="6" rx="2" fill={catColor} />
    <rect x="24" y="48" width="4" height="6" rx="2" fill={catColor} />
    <rect x="36" y="48" width="4" height="6" rx="2" fill={catColor} />
    <rect x="50" y="48" width="4" height="6" rx="2" fill={catColor} />
  </svg>,
  <svg key="click-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <ellipse cx="32" cy="34" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="26" r="6" fill={catColor} />
    <circle cx="44" cy="26" r="6" fill={catColor} />
    <path d="M 18 22 L 14 14 L 22 20" fill={darkColor} />
    <path d="M 46 22 L 50 14 L 42 20" fill={darkColor} />
    <path d="M 23 32 Q 26 29 29 32" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35 32 Q 38 29 41 32" stroke="black" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="36" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 36 L 32 40" stroke="black" strokeWidth="1.5" />
    <path d="M 26 42 Q 32 48 38 42" stroke="black" strokeWidth="2" fill="none" />
    <rect x="9" y="44" width="4" height="6" rx="2" fill={catColor} />
    <rect x="23" y="44" width="4" height="6" rx="2" fill={catColor} />
    <rect x="37" y="44" width="4" height="6" rx="2" fill={catColor} />
    <rect x="51" y="44" width="4" height="6" rx="2" fill={catColor} />
  </svg>,
  <svg key="click-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="14" ry="2.5" fill="rgba(0,0,0,0.1)" />
    <ellipse cx="32" cy="32" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="24" r="6" fill={catColor} />
    <circle cx="44" cy="24" r="6" fill={catColor} />
    <path d="M 18 20 L 14 12 L 22 18" fill={darkColor} />
    <path d="M 46 20 L 50 12 L 42 18" fill={darkColor} />
    <path d="M 23 30 Q 26 27 29 30" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35 30 Q 38 27 41 30" stroke="black" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="34" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 34 L 32 38" stroke="black" strokeWidth="1.5" />
    <path d="M 26 40 Q 32 46 38 40" stroke="black" strokeWidth="2" fill="none" />
    <rect x="8" y="42" width="4" height="6" rx="2" fill={catColor} />
    <rect x="22" y="42" width="4" height="6" rx="2" fill={catColor} />
    <rect x="38" y="42" width="4" height="6" rx="2" fill={catColor} />
    <rect x="52" y="42" width="4" height="6" rx="2" fill={catColor} />
  </svg>,
  <svg key="click-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <ellipse cx="32" cy="36" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="28" r="6" fill={catColor} />
    <circle cx="44" cy="28" r="6" fill={catColor} />
    <path d="M 18 24 L 14 16 L 22 22" fill={darkColor} />
    <path d="M 46 24 L 50 16 L 42 22" fill={darkColor} />
    <path d="M 23 34 Q 26 31 29 34" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35 34 Q 38 31 41 34" stroke="black" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="38" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 38 L 32 42" stroke="black" strokeWidth="1.5" />
    <path d="M 26 44 Q 32 49 38 44" stroke="black" strokeWidth="2" fill="none" />
    <rect x="9" y="46" width="4" height="6" rx="2" fill={catColor} />
    <rect x="23" y="46" width="4" height="6" rx="2" fill={catColor} />
    <rect x="37" y="46" width="4" height="6" rx="2" fill={catColor} />
    <rect x="51" y="46" width="4" height="6" rx="2" fill={catColor} />
  </svg>,
  <svg key="click-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="40" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="32" r="6" fill={catColor} />
    <circle cx="44" cy="32" r="6" fill={catColor} />
    <path d="M 18 28 L 14 20 L 22 26" fill={darkColor} />
    <path d="M 46 28 L 50 20 L 42 26" fill={darkColor} />
    <path d="M 23 38 Q 26 35 29 38" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35 38 Q 38 35 41 38" stroke="black" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="42" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 42 L 32 46" stroke="black" strokeWidth="1.5" />
    <path d="M 26 48 Q 32 51 38 48" stroke="black" strokeWidth="2" fill="none" />
    <rect x="10" y="50" width="4" height="6" rx="2" fill={catColor} />
    <rect x="24" y="50" width="4" height="6" rx="2" fill={catColor} />
    <rect x="36" y="50" width="4" height="6" rx="2" fill={catColor} />
    <rect x="50" y="50" width="4" height="6" rx="2" fill={catColor} />
  </svg>,
  <svg key="click-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
    <ellipse cx="32" cy="42" rx="16" ry="14" fill={catColor} />
    <circle cx="20" cy="34" r="6" fill={catColor} />
    <circle cx="44" cy="34" r="6" fill={catColor} />
    <path d="M 18 30 L 14 22 L 22 28" fill={darkColor} />
    <path d="M 46 30 L 50 22 L 42 28" fill={darkColor} />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
    <path d="M 32 44 L 32 48" stroke="black" strokeWidth="1.5" />
    <path d="M 28 48 Q 32 49 36 48" stroke="black" strokeWidth="1.5" fill="none" />
    <rect x="10" y="48" width="4" height="8" rx="2" fill={catColor} />
    <rect x="24" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="36" y="50" width="4" height="8" rx="2" fill={catColor} />
    <rect x="50" y="48" width="4" height="8" rx="2" fill={catColor} />
  </svg>
];

export const catSprite: SpriteSet = createSpriteSet({
  name: 'Cat',
  width: 64,
  height: 64,
  idleFrames,
  walkFrames,
  clickFrames,
  animationSpeed: {
    idle: 400,
    walk: 120,
    click: 90
  },
});