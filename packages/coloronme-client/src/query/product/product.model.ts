type Pagenation = {
  total_products: number;
  products_per_page: number;
  total_pages: number;
  current_page: number;
};

export type Product = {
  id: number;
  name: string;
  platform: string;
  imageUrl: string;
  isMyLike: boolean;
};

export interface Products {
  pagination: Pagenation;
  products: Product[];
}

export type Category = 'Outer' | 'Top' | 'Dress' | 'Bottom' | 'Jewelry' | 'Acc';

export type ProductDetail = {
  id: number;
  name: string;
  platform: string;
  imageUrl: string;
  isMyLike: boolean;
  likeCount: number;
  isMyPost: boolean;

  category: Category;
  color: string[];
  isExpose: boolean;
  personalColor: number;
  reportCount: number;
  sellUrl: string;
  userId: number;
};

export type OGInfo = {
  image: string;
  name: string;
  platform: string;
};
