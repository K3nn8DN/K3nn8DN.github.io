export type SpriteFrame = React.ReactNode | string;

export interface SpriteSet {
  name: string;
  width: number;
  height: number;
  idleFrames: SpriteFrame[];
  walkFrames: SpriteFrame[];
  clickFrames: SpriteFrame[];
  animationSpeed: {
    idle: number;  // ms per frame
    walk: number;  // ms per frame
    click: number; // ms per frame
  };
  clickLoops: number; // number of times to loop click animation
}

interface SpriteSetInput {
  name: string;
  width: number;
  height: number;
  idleFrames: SpriteFrame[];
  walkFrames: SpriteFrame[];
  clickFrames: SpriteFrame[];
  animationSpeed?: Partial<{
    idle: number;
    walk: number;
    click: number;
  }>;
  clickLoops?: number;
}

export function createSpriteSet(input: SpriteSetInput): SpriteSet {
  return {
    name: input.name,
    width: input.width,
    height: input.height,
    idleFrames: input.idleFrames,
    walkFrames: input.walkFrames,
    clickFrames: input.clickFrames,
    animationSpeed: {
      idle: input.animationSpeed?.idle ?? 300,
      walk: input.animationSpeed?.walk ?? 150,
      click: input.animationSpeed?.click ?? 100,
    },
    clickLoops: input.clickLoops ?? 1,
  };
}