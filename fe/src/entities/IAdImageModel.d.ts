import {IAdModel} from '@/entities/IAdModel';

export interface IAdImageModel {
  id?: number;
  adId?: number;
  url: string;
  ad?: IAdModel;
}
