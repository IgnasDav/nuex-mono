export interface ProductsRes {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export enum Category {
  BEAUTY = 'beauty',
  FRAGRANCES = 'fragrances',
  FURNITURE = 'furniture',
  GROCERIES = 'groceries',
  HOME_DECORATION = 'home-decoration',
  KITCHEN_ACCESSORIES = 'kitchen-accessories',
  LAPTOPS = 'laptops',
  MENS_SHIRTS = 'mens-shirts',
  MENS_SHOES = 'mens-shoes',
  MENS_WATCHES = 'mens-watches',
  MOBILE_ACCESSORIES = 'mobile-accessories',
  MOTORCYCLE = 'motorcycle',
  SKIN_CARE = 'skin-care',
  SMARTPHONES = 'smartphones',
  SPORTS_ACCESSORIES = 'sports-accessories',
  SUNGLASSES = 'sunglasses',
  TABLETS = 'tablets',
  TOPS = 'tops',
  VEHICLE = 'vehicle',
  WOMENS_BAGS = 'womens-bags',
  WOMENS_DRESSES = 'womens-dresses',
  WOMENS_JEWELLERY = 'womens-jewellery',
  WOMENS_SHOES = 'womens-shoes',
  WOMENS_WATCHES = 'womens-watches',
}
