import { CustomSVGProps } from '.';

export function HomeOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_701_989)">
        <path
          d="M20.42 10.18L12.71 2.30001C12.617 2.20628 12.5064 2.13189 12.3846 2.08112C12.2627 2.03035 12.132 2.00421 12 2.00421C11.868 2.00421 11.7373 2.03035 11.6154 2.08112C11.4936 2.13189 11.383 2.20628 11.29 2.30001L3.57999 10.19C3.39343 10.3781 3.24609 10.6013 3.14652 10.8468C3.04695 11.0923 2.99715 11.3551 2.99999 11.62V20C2.99922 20.5119 3.19477 21.0046 3.54637 21.3767C3.89797 21.7488 4.37885 21.9719 4.88999 22H19.11C19.6211 21.9719 20.102 21.7488 20.4536 21.3767C20.8052 21.0046 21.0008 20.5119 21 20V11.62C21.0008 11.0829 20.7928 10.5666 20.42 10.18ZM9.99999 20V14H14V20H9.99999ZM19 20H16V13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H8.99999C8.73478 12 8.48042 12.1054 8.29289 12.2929C8.10535 12.4804 7.99999 12.7348 7.99999 13V20H4.99999V11.58L12 4.43001L19 11.62V20Z"
          fill={color}
        />
      </g>
    </svg>
  );
}