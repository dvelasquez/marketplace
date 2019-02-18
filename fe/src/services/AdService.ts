import {ImageService} from '@/services/ImageService';
import {IAdModel} from '@/entities/IAdModel';

const imgService = new ImageService('marketplace-pt');

export class AdService {
  private ads: IAdModel[] = [
    {
      id: 1,
      img: [{
        id: 1,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }, {
        id: 2,
        url: 'https://img.yapo.cl/images/44/4493199738.jpg',
      }, {
        id: 3,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }],
      title: 'Excelente Samsung Galaxy S8 Duos',
      category: 'Celulares',
      price: '$250.000',
      location: 'Ñuñoa',
      date: new Date().toLocaleDateString(),
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 2,
      img: [{
        id: 1,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }, {
        id: 2,
        url: 'https://img.yapo.cl/images/44/4493199738.jpg',
      }, {
        id: 3,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }],
      title: 'Samsung Galaxy S8+ Pluss',
      category: 'Celulares',
      price: '$220.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 3,
      img: [{
        id: 1,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }, {
        id: 2,
        url: 'https://img.yapo.cl/images/44/4493199738.jpg',
      }, {
        id: 3,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }],
      title: 'Samsung s8',
      category: 'Celulares',
      price: '$200.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 4,
      img: [{
        id: 1,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }, {
        id: 2,
        url: 'https://img.yapo.cl/images/44/4493199738.jpg',
      }, {
        id: 3,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }],
      title: 'Samsung s8 64gb',
      category: 'Celulares',
      price: '$210.000',
      location: 'Santiago',
      date: new Date().toLocaleDateString(),
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 5,
      img: [{
        id: 1,
        url: 'https://img.yapo.cl/images/44/4471665591.jpg',
      }, {
        id: 2,
        url: 'https://img.yapo.cl/images/44/4493199738.jpg',
      }, {
        id: 3,
        url: imgService.getCroppedImage('samples/landscapes/beach-boat.jpg', 100, 100, 'vw'),
      }],
      title: 'S8+plus 64 gb',
      category: 'Celulares',
      price: '$240.000',
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
