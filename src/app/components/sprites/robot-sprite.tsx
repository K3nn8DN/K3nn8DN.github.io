import { createSpriteSet, SpriteSet } from './types';

const color = '#4F46E5';

// Idle animation frames (subtle breathing/bobbing motion)
const idleFrames = [
  <svg key="idle-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="30" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="40" r="3" fill="white" />
    <circle cx="38" cy="40" r="3" fill="white" />
    <circle cx="26" cy="40" r="1.5" fill="black" />
    <circle cx="38" cy="40" r="1.5" fill="black" />
    <rect x="28" y="20" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="35" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="35" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="idle-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="29" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="39" r="3" fill="white" />
    <circle cx="38" cy="39" r="3" fill="white" />
    <circle cx="26" cy="39" r="1.5" fill="black" />
    <circle cx="38" cy="39" r="1.5" fill="black" />
    <rect x="28" y="19" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="34" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="34" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="idle-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="30" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="40" r="3" fill="white" />
    <circle cx="38" cy="40" r="3" fill="white" />
    <circle cx="26" cy="40" r="1.5" fill="black" />
    <circle cx="38" cy="40" r="1.5" fill="black" />
    <rect x="28" y="20" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="35" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="35" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="idle-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="31" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="41" r="3" fill="white" />
    <circle cx="38" cy="41" r="3" fill="white" />
    <circle cx="26" cy="41" r="1.5" fill="black" />
    <circle cx="38" cy="41" r="1.5" fill="black" />
    <rect x="28" y="21" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="36" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="36" width="6" height="12" rx="3" fill={color} />
  </svg>
];

// Walking animation frames
const walkFrames = [
  <svg key="walk-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="30" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="40" r="3" fill="white" />
    <circle cx="38" cy="40" r="3" fill="white" />
    <circle cx="26" cy="40" r="1.5" fill="black" />
    <circle cx="38" cy="40" r="1.5" fill="black" />
    <rect x="28" y="20" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="35" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="35" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="walk-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="29" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="39" r="3" fill="white" />
    <circle cx="38" cy="39" r="3" fill="white" />
    <circle cx="26" cy="39" r="1.5" fill="black" />
    <circle cx="38" cy="39" r="1.5" fill="black" />
    <rect x="28" y="19" width="8" height="12" rx="4" fill={color} />
    <rect x="15" y="34" width="6" height="14" rx="3" fill={color} />
    <rect x="43" y="36" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="walk-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="28" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="38" r="3" fill="white" />
    <circle cx="38" cy="38" r="3" fill="white" />
    <circle cx="26" cy="38" r="1.5" fill="black" />
    <circle cx="38" cy="38" r="1.5" fill="black" />
    <rect x="28" y="18" width="8" height="12" rx="4" fill={color} />
    <rect x="14" y="33" width="6" height="16" rx="3" fill={color} />
    <rect x="44" y="38" width="6" height="11" rx="3" fill={color} />
  </svg>,
  <svg key="walk-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="30" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="40" r="3" fill="white" />
    <circle cx="38" cy="40" r="3" fill="white" />
    <circle cx="26" cy="40" r="1.5" fill="black" />
    <circle cx="38" cy="40" r="1.5" fill="black" />
    <rect x="28" y="20" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="35" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="35" width="6" height="12" rx="3" fill={color} />
  </svg>,
  <svg key="walk-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="31" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="41" r="3" fill="white" />
    <circle cx="38" cy="41" r="3" fill="white" />
    <circle cx="26" cy="41" r="1.5" fill="black" />
    <circle cx="38" cy="41" r="1.5" fill="black" />
    <rect x="28" y="21" width="8" height="12" rx="4" fill={color} />
    <rect x="17" y="36" width="6" height="12" rx="3" fill={color} />
    <rect x="41" y="34" width="6" height="14" rx="3" fill={color} />
  </svg>,
  <svg key="walk-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="32" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="42" r="3" fill="white" />
    <circle cx="38" cy="42" r="3" fill="white" />
    <circle cx="26" cy="42" r="1.5" fill="black" />
    <circle cx="38" cy="42" r="1.5" fill="black" />
    <rect x="28" y="22" width="8" height="12" rx="4" fill={color} />
    <rect x="18" y="38" width="6" height="11" rx="3" fill={color} />
    <rect x="40" y="33" width="6" height="16" rx="3" fill={color} />
  </svg>
];

// Click animation frames (jump/excited motion)
const clickFrames = [
  <svg key="click-0" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="25" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="35" r="3" fill="white" />
    <circle cx="38" cy="35" r="3" fill="white" />
    <circle cx="26" cy="35" r="1.5" fill="black" />
    <circle cx="38" cy="35" r="1.5" fill="black" />
    <path d="M 26 42 Q 32 45 38 42" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="28" y="15" width="8" height="12" rx="4" fill={color} />
    <rect x="14" y="28" width="6" height="10" rx="3" fill={color} transform="rotate(-20 17 33)" />
    <rect x="44" y="28" width="6" height="10" rx="3" fill={color} transform="rotate(20 47 33)" />
  </svg>,
  <svg key="click-1" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />
    <rect x="20" y="20" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="30" r="3" fill="white" />
    <circle cx="38" cy="30" r="3" fill="white" />
    <circle cx="26" cy="30" r="1.5" fill="black" />
    <circle cx="38" cy="30" r="1.5" fill="black" />
    <path d="M 26 37 Q 32 41 38 37" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="28" y="10" width="8" height="12" rx="4" fill={color} />
    <rect x="12" y="23" width="6" height="10" rx="3" fill={color} transform="rotate(-30 15 28)" />
    <rect x="46" y="23" width="6" height="10" rx="3" fill={color} transform="rotate(30 49 28)" />
  </svg>,
  <svg key="click-2" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="16" ry="2.5" fill="rgba(0,0,0,0.1)" />
    <rect x="20" y="18" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="28" r="3" fill="white" />
    <circle cx="38" cy="28" r="3" fill="white" />
    <circle cx="26" cy="28" r="1.5" fill="black" />
    <circle cx="38" cy="28" r="1.5" fill="black" />
    <path d="M 26 35 Q 32 40 38 35" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="28" y="8" width="8" height="12" rx="4" fill={color} />
    <rect x="10" y="21" width="6" height="10" rx="3" fill={color} transform="rotate(-40 13 26)" />
    <rect x="48" y="21" width="6" height="10" rx="3" fill={color} transform="rotate(40 51 26)" />
  </svg>,
  <svg key="click-3" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />
    <rect x="20" y="22" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="32" r="3" fill="white" />
    <circle cx="38" cy="32" r="3" fill="white" />
    <circle cx="26" cy="32" r="1.5" fill="black" />
    <circle cx="38" cy="32" r="1.5" fill="black" />
    <path d="M 26 39 Q 32 43 38 39" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="28" y="12" width="8" height="12" rx="4" fill={color} />
    <rect x="13" y="25" width="6" height="10" rx="3" fill={color} transform="rotate(-25 16 30)" />
    <rect x="45" y="25" width="6" height="10" rx="3" fill={color} transform="rotate(25 48 30)" />
  </svg>,
  <svg key="click-4" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="26" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="36" r="3" fill="white" />
    <circle cx="38" cy="36" r="3" fill="white" />
    <circle cx="26" cy="36" r="1.5" fill="black" />
    <circle cx="38" cy="36" r="1.5" fill="black" />
    <path d="M 26 43 Q 32 46 38 43" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="28" y="16" width="8" height="12" rx="4" fill={color} />
    <rect x="15" y="29" width="6" height="10" rx="3" fill={color} transform="rotate(-15 18 34)" />
    <rect x="43" y="29" width="6" height="10" rx="3" fill={color} transform="rotate(15 46 34)" />
  </svg>,
  <svg key="click-5" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
    <rect x="20" y="30" width="24" height="24" rx="4" fill={color} />
    <circle cx="26" cy="40" r="3" fill="white" />
    <circle cx="38" cy="40" r="3" fill="white" />
    <circle cx="26" cy="40" r="1.5" fill="black" />
    <circle cx="38" cy="40" r="1.5" fill="black" />
    <rect x="28" y="20" width="8" height="12" rx="4" fill={color} />
    <rect x="16" y="35" width="6" height="12" rx="3" fill={color} />
    <rect x="42" y="35" width="6" height="12" rx="3" fill={color} />
  </svg>
];


export const robotSprite: SpriteSet = createSpriteSet({
  name: 'Robot',
  width: 64,
  height: 64,
  idleFrames,
  walkFrames,
  clickFrames,
  animationSpeed: {
    idle: 300,
    walk: 150,
    click: 80
  },
  clickLoops: 2
});
