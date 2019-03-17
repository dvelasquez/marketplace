import {IAdModel} from '@/entities/IAdModel';

export class AdService {

  public async getAd(adId: number): Promise<IAdModel> {
    try {
      const query = {
        limit: 1,
        where: {id: adId},
        include: ['images', 'category', {relation: 'commune', scope: {include: 'region'}}],
      };
      const response = await fetch(`https://www.panor.am/api/Ads?filter=${JSON.stringify(query)}`);
      const ad = await response.json();
      return ad[0];
    } catch (e) {
      throw e;
    }
  }

  public async getAds(): Promise<IAdModel[]> {
    try {
      const query = {
        limit: 10,
        include: ['images', 'category', {relation: 'commune', scope: {include: 'region'}}],
      };
      const response = await fetch(`https://www.panor.am/api/Ads?filter=${JSON.stringify(query)}`);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
}
