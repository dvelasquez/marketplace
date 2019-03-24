import {CategoryService} from '@/services/CategoryService';
import {LocationService} from '@/services/LocationService';
import {IMetadata} from '@/entities/Metadata';

export class MetadataService {
  public async get(): Promise<IMetadata> {
    try {
      const locationService = new LocationService();
      const categoryService = new CategoryService();
      const results = await Promise.all([
        categoryService.get(),
        locationService.getRegions(),
        locationService.getCommunes(),
      ]);

      return {
        categories: results[0],
        regions: results[1],
        communes: results[2],
      };
    } catch (error) {
      throw error;
    }
  }
}
