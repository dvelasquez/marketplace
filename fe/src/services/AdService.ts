import {IAdModel} from '@/entities/IAdModel';
import {IAdImageModel} from '@/entities/IAdImageModel';
import {ImageService} from '@/services/ImageService';

export class AdService {

  public async getAd(adId: number): Promise<IAdModel> {
    try {
      const query = {
        limit: 1,
        where: {id: adId},
        include: ['images', 'category', {relation: 'commune', scope: {include: 'region'}}],
      };
      const response = await fetch(`https://www.panor.am/api/ads?filter=${JSON.stringify(query)}`);
      const ad = await response.json();
      return ad[0];
    } catch (e) {
      throw e;
    }
  }

  public async getAds(size: number, page: number): Promise<IAdModel[]> {
    try {
      const skip = (page - 1) * size;
      const query = {
        limit: size,
        include: ['images', 'category', {relation: 'commune', scope: {include: 'region'}}],
        order: 'updatedAt DESC',
        skip,
      };
      const response = await fetch(`https://www.panor.am/api/ads?filter=${JSON.stringify(query)}`);
      return response.json();
    } catch (e) {
      throw e;
    }
  }

  public async saveAd(ad: IAdModel): Promise<IAdModel> {
    try {
      const images: IAdImageModel[] = JSON.parse(JSON.stringify(ad.images));
      delete ad.images;
      ad.createdAt = new Date();
      ad.updatedAt = new Date();
      const response = await fetch(`https://www.panor.am/api/ads`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ad),
        });
      const persistedAd: IAdModel = await response.json();
      images.forEach((image) => {
        if (persistedAd.id) {
          image.adId = persistedAd.id;
        }
      });
      const imageService = new ImageService('marketplace-pt');
      persistedAd.images = await imageService.saveImages(images);

      return persistedAd;
    } catch (e) {
      throw e;
    }
  }
}
