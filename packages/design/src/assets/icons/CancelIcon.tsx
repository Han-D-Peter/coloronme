import { CustomSVGProps } from '.';

export function CancelIcon({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_701_1093)">
        <circle cx="11" cy="7" r="7" fill={color} />
        <path d="M13.5 4.5L8.5 9.5" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
        <path d="M8.5 4.5L13.5 9.5" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  );
}
