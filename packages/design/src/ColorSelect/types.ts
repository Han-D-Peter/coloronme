export interface Response<T> {
  status: string;
  data: T;
}

export type ColorRGB = { colorId: number; name: string; r: string; g: string; b: string };
export type ColorType = 'pccs' | 'ks';

export type ColorGroup = PccsColorGroup | KsColorGoup;

export type PccsColorGroup = 'p' | 'ltg' | 'g' | 'dkg' | 'lt' | 'sf' | 'd' | 'dk' | 'b' | 's' | 'dp' | 'v';
export type KsColorGoup = 'wh' | 'ltg' | 'g' | 'dkg' | 'bk' | 'pl' | 'sf' | 'd' | 'dk' | 'lt' | 'bs' | 'dp' | 'v';
export type ColorLibrary = { [key in ColorType]: { [groupKey in ColorGroup]: ColorRGB[] } };
