import { useTheme } from "../contexts/ThemeContext";

export function BubbleSVG({
  popped,
  onClick,
  className = "",
}: {
  popped: boolean;
  onClick: () => void;
  className?: string;
}) {
  const theme = useTheme();
  
  return (
    <svg
      onClick={onClick}
      className={`${className} cursor-pointer transition-all duration-300`}
      width="120"
      height="120"
      viewBox="0 0 100 100"
    >
      {/* bubble */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill={theme.primary500Rgb.replace("rgb", "rgba").replace(")", ", 0.15)")}
        stroke={theme.primaryRgb.replace("rgb", "rgba").replace(")", ", 0.5)")}
        strokeWidth="2"
        className={popped ? "animate-pop" : "animate-float"}
      />

      {/* shine */}
      {!popped && (
        <circle
          cx="38"
          cy="38"
          r="8"
          fill={theme.secondaryRgb.replace("rgb", "rgba").replace(")", ", 0.4)")}
        />
      )}

      {/* pop lines */}
      {popped && (
        <>
          <line x1="50" y1="20" x2="50" y2="5" stroke={theme.primaryRgb} strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="95" stroke={theme.secondaryRgb} strokeWidth="2" />
          <line x1="20" y1="50" x2="5" y2="50" stroke={theme.primaryRgb} strokeWidth="2" />
          <line x1="80" y1="50" x2="95" y2="50" stroke={theme.secondaryRgb} strokeWidth="2" />
        </>
      )}
    </svg>
  );
}