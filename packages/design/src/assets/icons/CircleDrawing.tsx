import { CustomSVGProps } from '.';

export function CircleDrawing({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.417 8.5C16.417 12.6421 13.0591 16 8.91699 16C4.77486 16 1.41699 12.6421 1.41699 8.5C1.41699 4.35786 4.77486 1 8.91699 1C13.0591 1 16.417 4.35786 16.417 8.5Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
