import { CustomSVGProps } from '.';

export function SirenIconOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.583 11.4583L14.583 14.5833" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.417 11.4583L10.417 14.5833" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M22.917 19.7917H2.08366V19.7917C3.46167 19.7917 4.15068 19.7917 4.64882 19.4667C4.88108 19.3152 5.07929 19.1169 5.23084 18.8847C5.55588 18.3865 5.55588 17.6975 5.55588 16.3195V9.20841C5.55588 7.3228 5.55588 6.37999 6.14167 5.7942C6.72745 5.20842 7.67026 5.20842 9.55588 5.20842H15.4448C17.3304 5.20842 18.2732 5.20842 18.859 5.7942C19.4448 6.37999 19.4448 7.3228 19.4448 9.20842V16.3195C19.4448 17.6975 19.4448 18.3865 19.7698 18.8847C19.9214 19.1169 20.1196 19.3152 20.3518 19.4667C20.85 19.7917 21.539 19.7917 22.917 19.7917V19.7917Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
