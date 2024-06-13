import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export function svgToDataUrl(svgComponent: ReactElement<string, string>): string {
  const svgString = renderToStaticMarkup(svgComponent as any);
  const encodedSVG = encodeURIComponent(svgString);
  return `url("data:image/svg+xml,${encodedSVG}")`;
}
