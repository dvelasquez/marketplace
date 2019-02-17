import cloudinary, {Cloudinary} from 'cloudinary-core';

export class ImageService {

  private cl: Cloudinary;

  constructor(cloudName: string) {
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
      default: {
        return this.getImage(name);
      }
    }
  }


  public getImage(name: string): string {
    return this.cl.url(name);
  }

  private convertREMtoPixel(rem: number): number {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize || '0');
    return rem * fontSize;
  }


}
