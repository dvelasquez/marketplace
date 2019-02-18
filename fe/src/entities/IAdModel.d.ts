export interface IAdModel {
  id: number;
  img: Array<{ id: number, url: string }>;
  title: string;
  category: string;
  price: string;
  location: string;
  date: string;
  description: string;
}
