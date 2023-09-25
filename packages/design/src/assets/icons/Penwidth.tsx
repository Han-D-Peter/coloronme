import { CustomSVGProps } from '.';

export function Penwidth({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8H14" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M2 4L14 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M2 1L14 0.999999" stroke={color} strokeLinecap="round" />
    </svg>
  );
}
