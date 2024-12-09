import { Seasons } from '../hooks/queryhooks/color/color.type';
import { Seasons as KoSeasons } from '../../../../../design/src/SeasonPicker/index';

export const brushColor = ['#000000', '#ADADAD', '#FF0000', '#0500FF', '#FAFF00', '#2BD900', '#BD00FF'];

export const SEASONS: Record<Seasons, KoSeasons> = {
  spring: '봄 웜',
  summer: '여름 쿨',
  autumn: '가을 웜',
  winter: '겨울 쿨',
};
