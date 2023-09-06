import { CustomSVGProps } from '.';

export function Warnning({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 0C3.2 0 0 3.2 0 7C0 10.8 3.2 14 7 14C10.8 14 14 10.9 14 7C14 3.1 10.9 0 7 0Z"
        fill={color}
      />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H7.5V8H6.5V3Z" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99995 11.2001C6.59995 11.2001 6.19995 10.8001 6.19995 10.4001C6.19995 10.0001 6.49995 9.6001 6.99995 9.6001C7.39995 9.6001 7.79995 10.0001 7.79995 10.4001C7.79995 10.8001 7.39995 11.2001 6.99995 11.2001Z"
        fill="white"
      />
    </svg>
  );
}
