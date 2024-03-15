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
  isLiked: boolean;
};

export interface Products {
  pagination: Pagenation;
  products: Product[];
}
