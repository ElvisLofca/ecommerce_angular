export interface Product {
  id?: number;
  user: number;
  name: string;
  image?: string;
  brand?: string;
  category?: string;
  description?: string;
  rating: number;
  num_reviews: number;
  price: number;
  count_in_stock: number;
  created_at?: Date;
  updated_at?: Date;
}
