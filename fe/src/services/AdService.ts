import {ImageService} from '@/services/ImageService';
import {IAdModel} from '@/entities/IAdModel';

const imgService = new ImageService('marketplace-pt');

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
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];

  public getAd(adId: number): IAdModel {
    return this.ads.filter((ad) => ad.id === adId)[0];
  }
}
