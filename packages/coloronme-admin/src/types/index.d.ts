import { FabricJSEditor } from 'fabricjs-react';

declare module 'fabricjs-react' {
  interface FabricJSEditor {
    isDragging?: boolean;
    selection?: boolean;
    lastPosX: number;
    lastPosY: number;
    viewportTransform?: any;
    requestRenderAll: () => void;
    setViewportTransform: (args: any) => void;
  }
}
