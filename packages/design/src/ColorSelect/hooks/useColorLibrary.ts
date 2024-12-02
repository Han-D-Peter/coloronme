import { useEffect, useState } from 'react';
import { ColorLibrary, Response } from '../types';

export default function useColorLibrary() {
  const [color, setColor] = useState<Response<ColorLibrary> | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://port-0-admin-coloronme-staging-am952nlsmt6rh8.sel5.cloudtype.app/color-library?type=all',
      );
      setColor(await data.json());
    })();
  }, []);

  return color ? color.data : null;
}
