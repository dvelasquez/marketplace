import {IAdImageModel} from '@/entities/IAdImageModel';
import {IUserModel} from '@/entities/IUserModel';

export interface IAdModel {
  id?: number;
  images?: IAdImageModel[];
  title: string;
  categoryId: number;
  price: number;
  communeId: number;
  commune?: ILocation;
  category?: ICategory;
  location?: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
  sellerId: number;
  seller?: IUserModel;
}
