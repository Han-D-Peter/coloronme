import { ColorCode, ColorName } from '@design';
import { Category } from '../query/product/product.model';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const PERSONAL_COLOR = {
  spring: [
    {
      id: 1,
      name: '봄 웜 라이트',
      color: 'rgb(210, 238, 250)',
      fontColor: '#000',
    },
    {
      id: 2,
      name: '봄 웜 클리어',
      color: 'rgb(254, 211, 60)',
      fontColor: '#000',
    },
    {
      id: 3,
      name: '봄 웜 스트롱',
      color: 'rgb(172, 221, 77)',
      fontColor: '#000',
    },
  ],
  summer: [
    {
      id: 4,
      name: '여름 쿨 라이트',
      color: 'rgb(248, 195, 223)',
      fontColor: '#000',
    },
    {
      id: 5,
      name: '여름 쿨 클리어',
      color: 'rgb(236, 242, 69)',
      fontColor: '#000',
    },
    {
      id: 6,
      name: '여름 쿨 뮤트',
      color: 'rgb(203, 143, 169)',
      fontColor: '#000',
    },
  ],
  fall: [
    {
      id: 7,
      name: '가을 웜 뮤트',
      color: 'rgb(217, 147, 118)',
      fontColor: '#000',
    },
    {
      id: 8,
      name: '가을 웜 트루',
      color: 'rgb(212, 96, 59)',
      fontColor: '#000',
    },
    { id: 9, name: '가을 웜 딥', color: 'rgb(153, 27, 7)', fontColor: '#fff' },
  ],
  winter: [
    {
      id: 10,
      name: '겨울 쿨 스트롱',
      color: 'rgb(26, 179, 133)',
      fontColor: '#000',
    },
    {
      id: 11,
      name: '겨울 쿨 트루',
      color: 'rgb(125, 200, 247)',
      fontColor: '#000',
    },
    {
      id: 12,
      name: '겨울 쿨 딥',
      color: 'rgb(170, 55, 90)',
      fontColor: '#fff',
    },
  ],
};

export const PERSONAL_COLOR_MAPPING: {
  [key: number]: {
    code: ColorCode;
    name: ColorName;
  };
} = {
  1: {
    code: 'Best_SW_LG',
    name: '봄 웜 라이트',
  },
  2: {
    code: 'Best_SW_CL',
    name: '봄 웜 클리어',
  },
  3: {
    code: 'Best_SW_ST',
    name: '봄 웜 스트롱',
  },
  4: {
    code: 'Best_SC_LG',
    name: '여름 쿨 라이트',
  },
  5: {
    code: 'Best_SC_CL',
    name: '여름 쿨 클리어',
  },
  6: {
    code: 'Best_SC_MT',
    name: '여름 쿨 뮤트',
  },
  7: {
    code: 'Best_FW_MT',
    name: '가을 웜 뮤트',
  },
  8: {
    code: 'Best_FW_TR',
    name: '가을 웜 트루',
  },
  9: {
    code: 'Best_FW_DP',
    name: '가을 웜 딥',
  },
  10: {
    code: 'Best_WC_ST',
    name: '겨울 쿨 스트롱',
  },
  11: {
    code: 'Best_WC_TR',
    name: '겨울 쿨 트루',
  },
  12: {
    code: 'Best_WC_DP',
    name: '겨울 쿨 딥',
  },
};

export const PERSONAL_COLOR_ENTRIES = Object.entries(PERSONAL_COLOR_MAPPING);

export type ProductCategory = '아우터' | '상의' | '하의' | '원피스/세트' | '주얼리' | '패션소품';
export const PRODUCT_CATEGORY: ProductCategory[] = ['아우터', '상의', '하의', '원피스/세트', '주얼리', '패션소품'];

export const CATEGORY: Record<Category, ProductCategory> = {
  Outer: '아우터',
  Top: '상의',
  Dress: '원피스/세트',
  Bottom: '하의',
  Jewelry: '주얼리',
  Acc: '패션소품',
};

export const CATEGORY_ENTRIES = Object.entries(CATEGORY) as [Category, ProductCategory][];

type SortOptions = Record<string, string>;

export const PRODUCT_SORT_ORDER: SortOptions = {
  newest: '최신순',
  popular: '인기순',
  oldest: '오래된순',
};

export const PRODUCT_SORT_VALUE = Object.values(PRODUCT_SORT_ORDER);
export const PRODUCT_SORT_ENTRIES = Object.entries(PRODUCT_SORT_ORDER);

export const PRODUCT_REPORT = {
  soldOut: '품절 또는 판매 중지',
  invalidLink: '유효하지 않은 링크',
  colorMismatch: '퍼스널컬러 불일치',
  infoError: '상품 정보 오류',
  etc: '기타',
};

export type ProductReport = 'soldOut' | 'invalidLink' | 'colorMismatch' | 'infoError' | 'etc';
export const PRODUCT_REPORT_ENTRIES = Object.entries(PRODUCT_REPORT) as [ProductReport, string][];

export type CommentReport = 'spam' | 'adult' | 'illegal' | 'harmful' | 'curse' | 'infoLeak' | 'etc';
export const COMMENT_REPORT = {
  spam: '스팸홍보/도배글',
  adult: '음란물',
  illegal: '불법정보',
  harmful: '유해한 내용',
  curse: '욕설/생명경시/혐오/차별적발언',
  infoLeak: '개인정보 노출',
  etc: '기타',
};

export const COMMENT_REPORT_ENTRIES = Object.entries(COMMENT_REPORT) as [CommentReport, string][];
