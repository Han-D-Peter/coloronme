import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(() => import('./Canvas'), { ssr: false });

export default DynamicCanvas;
