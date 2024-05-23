import { CustomSVGProps } from '.';

export function CircleMinusIcon({ width, height, color = '#1B1B1B' }: CustomSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={color} />
      <path d="M4 8H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
