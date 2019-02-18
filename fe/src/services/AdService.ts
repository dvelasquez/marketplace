import {ImageService} from '@/services/ImageService';

const imgService = new ImageService('marketplace-pt');

export interface IAdModel {
  id: number;
  img: Array<{ id: number, url: string }>;
  title: string;
  category: string;
  price: string;
  location: string;
  date: string;
}

export class AdService {
  private ads: IAdModel[] = [
    {
      id: 1,
      img: [{
        id: 1,
        url: imgService.getCroppedImage('samples/food/spices.jpg', 100, 100, 'vw'),
      }, {
        id: 2,
        url: imgService.getCroppedImage('samples/imagecon-group.jpg', 100, 100, 'vw'),
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
      category: 'Mascotas',
      price: '$97.000',
      location: 'Ñuñoa',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      img: [{
        id: 1,
        url: imgService.getCroppedImage('samples/food/spices.jpg', 100, 100, 'vw'),
      }, {
        id: 2,
        url: imgService.getCroppedImage('samples/imagecon-group.jpg', 100, 100, 'vw'),
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
      category: 'Mascotas',
      price: '$97.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      img: [{
        id: 1,
        url: imgService.getCroppedImage('samples/food/spices.jpg', 100, 100, 'vw'),
      }, {
        id: 2,
        url: imgService.getCroppedImage('samples/imagecon-group.jpg', 100, 100, 'vw'),
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
      category: 'Mascotas',
      price: '$97.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 4,
      img: [{
        id: 1,
        url: imgService.getCroppedImage('samples/food/spices.jpg', 100, 100, 'vw'),
      }, {
        id: 2,
        url: imgService.getCroppedImage('samples/imagecon-group.jpg', 100, 100, 'vw'),
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
      category: 'Mascotas',
      price: '$97.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 5,
      img: [{
        id: 1,
        url: imgService.getCroppedImage('samples/food/spices.jpg', 100, 100, 'vw'),
      }, {
        id: 2,
        url: imgService.getCroppedImage('samples/imagecon-group.jpg', 100, 100, 'vw'),
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
      category: 'Mascotas',
      price: '$97.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
    },
  ];

  public getAd(adId: number): IAdModel {
    return this.ads.filter((ad) => ad.id === adId)[0];
  }
}
