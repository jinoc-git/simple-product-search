export interface ProductType {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface FetchProductsReturn {
  limit: number;
  products: ProductType[] | [];
  skip: number;
  total: number;
}
