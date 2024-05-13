export interface ResponsiveSetting {
  breakpoint: { max: number; min: number };
  items: number;
  slidesToSlide: number;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  keywords: string;
  description: string;
  price: number;
}