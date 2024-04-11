import { CustomSVGProps } from '.';

export function MoreVerticalOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1863_3444)">
        <path
          d="M10 11.6666C10.9205 11.6666 11.6667 10.9205 11.6667 9.99998C11.6667 9.07951 10.9205 8.33331 10 8.33331C9.07953 8.33331 8.33333 9.07951 8.33333 9.99998C8.33333 10.9205 9.07953 11.6666 10 11.6666Z"
          fill={color}
        />
        <path
          d="M10 5.83333C10.9205 5.83333 11.6667 5.08714 11.6667 4.16667C11.6667 3.24619 10.9205 2.5 10 2.5C9.07953 2.5 8.33333 3.24619 8.33333 4.16667C8.33333 5.08714 9.07953 5.83333 10 5.83333Z"
          fill={color}
        />
        <path
          d="M10 17.5C10.9205 17.5 11.6667 16.7538 11.6667 15.8334C11.6667 14.9129 10.9205 14.1667 10 14.1667C9.07953 14.1667 8.33333 14.9129 8.33333 15.8334C8.33333 16.7538 9.07953 17.5 10 17.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1863_3444">
          <rect width="20" height="20" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
