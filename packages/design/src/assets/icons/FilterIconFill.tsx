import { CustomSVGProps } from '.';

export function FilterIconFill({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H2.5L6.25 13.75V1.25H5V10ZM8.75 3.125V13.75H10V5H12.5L8.75 1.25V3.125Z" fill={color} />
    </svg>
  );
}
