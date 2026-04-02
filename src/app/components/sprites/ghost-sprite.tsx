import { createSpriteSet, SpriteSet } from './types';

const ghostColor = '#E0E7FF';
const darkColor = '#C7D2FE';

// Idle animation frames
const idleFrames = [
  <svg key="idle-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 44 Q 16 24 32 24 Q 48 24 48 44 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="38" r="4" fill="white" />
    <circle cx="38" cy="38" r="4" fill="white" />
    <circle cx="26" cy="38" r="2" fill="black" />
    <circle cx="38" cy="38" r="2" fill="black" />
    <ellipse cx="32" cy="46" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="idle-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 43 Q 16 23 32 23 Q 48 23 48 43 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="37" r="4" fill="white" />
    <circle cx="38" cy="37" r="4" fill="white" />
    <circle cx="26" cy="37" r="2" fill="black" />
    <circle cx="38" cy="37" r="2" fill="black" />
    <ellipse cx="32" cy="45" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="idle-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 42 Q 16 22 32 22 Q 48 22 48 42 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="36" r="4" fill="white" />
    <circle cx="38" cy="36" r="4" fill="white" />
    <circle cx="26" cy="36" r="2" fill="black" />
    <circle cx="38" cy="36" r="2" fill="black" />
    <ellipse cx="32" cy="44" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="idle-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 43 Q 16 23 32 23 Q 48 23 48 43 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="37" r="4" fill="white" />
    <circle cx="38" cy="37" r="4" fill="white" />
    <circle cx="26" cy="37" r="2" fill="black" />
    <circle cx="38" cy="37" r="2" fill="black" />
    <ellipse cx="32" cy="45" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>
];

// Walking animation frames (floating side to side)
const walkFrames = [
  <svg key="walk-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="30" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 14 44 Q 14 24 30 24 Q 46 24 46 44 L 46 54 L 42 50 L 38 54 L 34 50 L 30 54 L 26 50 L 22 54 L 18 50 L 14 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="24" cy="38" r="4" fill="white" />
    <circle cx="36" cy="38" r="4" fill="white" />
    <circle cx="24" cy="38" r="2" fill="black" />
    <circle cx="36" cy="38" r="2" fill="black" />
    <ellipse cx="30" cy="46" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="walk-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="31" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 15 42 Q 15 22 31 22 Q 47 22 47 42 L 47 54 L 43 50 L 39 54 L 35 50 L 31 54 L 27 50 L 23 54 L 19 50 L 15 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="25" cy="36" r="4" fill="white" />
    <circle cx="37" cy="36" r="4" fill="white" />
    <circle cx="25" cy="36" r="2" fill="black" />
    <circle cx="37" cy="36" r="2" fill="black" />
    <ellipse cx="31" cy="44" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="walk-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 40 Q 16 20 32 20 Q 48 20 48 40 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="34" r="4" fill="white" />
    <circle cx="38" cy="34" r="4" fill="white" />
    <circle cx="26" cy="34" r="2" fill="black" />
    <circle cx="38" cy="34" r="2" fill="black" />
    <ellipse cx="32" cy="42" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="walk-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="34" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 18 42 Q 18 22 34 22 Q 50 22 50 42 L 50 54 L 46 50 L 42 54 L 38 50 L 34 54 L 30 50 L 26 54 L 22 50 L 18 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="28" cy="36" r="4" fill="white" />
    <circle cx="40" cy="36" r="4" fill="white" />
    <circle cx="28" cy="36" r="2" fill="black" />
    <circle cx="40" cy="36" r="2" fill="black" />
    <ellipse cx="34" cy="44" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="walk-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="33" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 17 44 Q 17 24 33 24 Q 49 24 49 44 L 49 54 L 45 50 L 41 54 L 37 50 L 33 54 L 29 50 L 25 54 L 21 50 L 17 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="27" cy="38" r="4" fill="white" />
    <circle cx="39" cy="38" r="4" fill="white" />
    <circle cx="27" cy="38" r="2" fill="black" />
    <circle cx="39" cy="38" r="2" fill="black" />
    <ellipse cx="33" cy="46" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>,
  <svg key="walk-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 46 Q 16 26 32 26 Q 48 26 48 46 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="40" r="4" fill="white" />
    <circle cx="38" cy="40" r="4" fill="white" />
    <circle cx="26" cy="40" r="2" fill="black" />
    <circle cx="38" cy="40" r="2" fill="black" />
    <ellipse cx="32" cy="48" rx="4" ry="3" fill={darkColor} opacity="0.5" />
  </svg>
];

// Click animation frames (spooky/surprised)
const clickFrames = [
  <svg key="click-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 40 Q 16 20 32 20 Q 48 20 48 40 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="34" r="5" fill="white" />
    <circle cx="38" cy="34" r="5" fill="white" />
    <circle cx="26" cy="34" r="3" fill="black" />
    <circle cx="38" cy="34" r="3" fill="black" />
    <circle cx="32" cy="44" r="4" fill="black" opacity="0.6" />
  </svg>,
  <svg key="click-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="14" ry="2.5" fill="rgba(0,0,0,0.1)" />
    <path d="M 16 36 Q 16 16 32 16 Q 48 16 48 36 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="30" r="6" fill="white" />
    <circle cx="38" cy="30" r="6" fill="white" />
    <circle cx="26" cy="30" r="4" fill="black" />
    <circle cx="38" cy="30" r="4" fill="black" />
    <ellipse cx="32" cy="42" rx="5" ry="6" fill="black" opacity="0.6" />
  </svg>,
  <svg key="click-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="12" ry="2" fill="rgba(0,0,0,0.08)" />
    <path d="M 16 34 Q 16 14 32 14 Q 48 14 48 34 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" opacity="0.95" />
    <circle cx="26" cy="28" r="6" fill="white" />
    <circle cx="38" cy="28" r="6" fill="white" />
    <circle cx="26" cy="28" r="4" fill="black" />
    <circle cx="38" cy="28" r="4" fill="black" />
    <ellipse cx="32" cy="40" rx="6" ry="7" fill="black" opacity="0.6" />
  </svg>,
  <svg key="click-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="14" ry="2.5" fill="rgba(0,0,0,0.1)" />
    <path d="M 16 36 Q 16 16 32 16 Q 48 16 48 36 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="30" r="6" fill="white" />
    <circle cx="38" cy="30" r="6" fill="white" />
    <circle cx="26" cy="30" r="4" fill="black" />
    <circle cx="38" cy="30" r="4" fill="black" />
    <ellipse cx="32" cy="42" rx="5" ry="6" fill="black" opacity="0.6" />
  </svg>,
  <svg key="click-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 38 Q 16 18 32 18 Q 48 18 48 38 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="32" r="5" fill="white" />
    <circle cx="38" cy="32" r="5" fill="white" />
    <circle cx="26" cy="32" r="3" fill="black" />
    <circle cx="38" cy="32" r="3" fill="black" />
    <ellipse cx="32" cy="43" rx="4" ry="5" fill="black" opacity="0.6" />
  </svg>,
  <svg key="click-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />
    <path d="M 16 40 Q 16 20 32 20 Q 48 20 48 40 L 48 54 L 44 50 L 40 54 L 36 50 L 32 54 L 28 50 L 24 54 L 20 50 L 16 54 Z" fill={ghostColor} stroke={darkColor} strokeWidth="1.5" />
    <circle cx="26" cy="34" r="5" fill="white" />
    <circle cx="38" cy="34" r="5" fill="white" />
    <circle cx="26" cy="34" r="3" fill="black" />
    <circle cx="38" cy="34" r="3" fill="black" />
    <circle cx="32" cy="44" r="4" fill="black" opacity="0.6" />
  </svg>
];

export const ghostSprite: SpriteSet = createSpriteSet({
  name: 'Ghost',
  width: 64,
  height: 64,
  idleFrames,
  walkFrames,
  clickFrames,
  animationSpeed: {
    idle: 350,
    walk: 130,
    click: 70
  },
  clickLoops: 2
});
