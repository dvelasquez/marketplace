import cloudinary, {Cloudinary} from 'cloudinary-core';
import {IAdImageModel} from '@/entities/IAdImageModel';

export class ImageService {

  private cl: Cloudinary;
  private cloudName: string;

  constructor(cloudName: string) {
    this.cloudName = cloudName;
    this.cl = new cloudinary.Cloudinary({cloud_name: cloudName, secure: true});
  }


  public getCroppedImage(name: string, width: number, height: number, sizeType?: string) {
    switch (sizeType) {
      case 'rem': {
        return this.cl.url(name, {
          width: this.convertREMtoPixel(width),
          height: this.convertREMtoPixel(height),
          crop: 'fill',
        });
      }
      case 'vw': {
        return this.cl.url(name, {
          width: this.convertVWtoPixel(width),
          height: this.convertVWtoPixel(height),
          crop: 'fill',
        });
      }
      default: {
        return this.getImage(name);
      }
    }
  }

  public uploadFiles(files: FileList): Promise<any> {
    const uploadRequests: Array<Promise<any>> = [];
    Array.from(files).forEach((file) => {
      uploadRequests.push(this.uploadFile(file));
    });
    return Promise.all(uploadRequests);
  }

  public async saveImages(images: IAdImageModel[]): Promise<IAdImageModel[]> {
    try {
      const response = await fetch(`https://www.panor.am/api/adImages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(images),
        });
      return await response.json();
    } catch (e) {
      throw e;
    }
  }


  public getImage(name: string): string {
    return this.cl.url(name);
  }

  private async uploadFile(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('upload_preset', 'tnhx9cfu');
    formData.append('tags', 'browser_upload');
    formData.append(`file`, file);
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,
        {
          method: 'POST',
          body: formData,
        });
      return await response.json();
    } catch (error) {
      throw(error);
    }

  }

  private convertREMtoPixel(rem: number): number {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize || '0');
    return rem * fontSize;
  }

  private convertVWtoPixel(percent: number): number {
    const maxWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent / 100) * maxWidth;
  }
}
