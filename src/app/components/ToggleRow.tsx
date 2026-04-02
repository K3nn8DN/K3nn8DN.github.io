import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type ToggleRowProps = {
  left: string;
  right: string;

  // optional (for controlled mode)
  isRight?: boolean;
  onToggle?: (value: boolean) => void;
};

export function ToggleRow({
  left,
  right,
  isRight: controlledIsRight,
  onToggle,
}: ToggleRowProps) {
  const [internalIsRight, setInternalIsRight] = useState(false);
  const theme = useTheme();

  // decide which state to use
  const isRight =
    controlledIsRight !== undefined
      ? controlledIsRight
      : internalIsRight;

  const handleClick = () => {
    const newValue = !isRight;

    // update internal if uncontrolled
    if (controlledIsRight === undefined) {
      setInternalIsRight(newValue);
    }

    // notify parent if controlled
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between cursor-pointer px-2 py-1 w-full"
    >
      {/* Left */}
      <span 
        className="transition-colors"
        style={{
          color: !isRight 
            ? (theme.darkMode === 'dark' ? '#ffffff' : '#000000')
            : '#9ca3af'
        }}
      >
        {left}
      </span>

      {/* Slider */}
      <div className="relative w-10 h-5 mx-2">
        <div className="absolute inset-0 bg-gray-700 rounded-full" />
        <div
          className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ${
            isRight ? 'left-6' : 'left-1'
          }`}
        />
      </div>

      {/* Right */}
      <span 
        className="transition-colors"
        style={{
          color: isRight 
            ? (theme.darkMode === 'dark' ? '#ffffff' : '#000000')
            : '#9ca3af'
        }}
      >
        {right}
      </span>
    </div>
  );
}