import { CustomSVGProps } from '.';

export function Kakao({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 17.5L4 13.5L8.5 14.5L3.5 17.5Z" fill={color} />
      <ellipse cx="10" cy="7.5" rx="10" ry="7.5" fill={color} />
    </svg>
  );
}
