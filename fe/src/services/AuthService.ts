import {IUserModel} from '@/entities/IUserModel';

const mockUserData: IUserModel[] = [
  {
    id: 1,
    email: 'danilo.velasquez@iacc.cl',
    password: '123123123',
  },
  {
    id: 2,
    email: 'danilo.velasquez@gmail.com',
    password: '123123123',
  },
  {
    id: 3,
    email: 'danilo.velasquez@hotmail.com',
    password: '123123123',
  },

];

export class AuthService {
  private user?: IUserModel;

  constructor() {
    this.loadData();
    this.isAuthenticated();
  }

  public register(user: IUserModel): IUserModel | undefined {
    if (user.password && user.email && user.password === user.rePassword) {
      const usersDb: IUserModel[] = JSON.parse(window.localStorage.getItem('usersDb') || '[]');
      usersDb.forEach((userDb) => {
        if (this.compareEmails(user.email, user.email)) {
          throw Error('Email already registered, try again');
        }
      });
      const maxId = Math.max.apply(Math, usersDb.map((o: any) => o.id));
      user.id = maxId + 1;
      delete user.rePassword;
      usersDb.push(user);
      return user;
    }
    return;
  }

  public login(user: IUserModel): boolean {
    const userFound = this.searchUser(user);
    if (userFound && userFound.id) {
      this.user = userFound;
      window.localStorage.setItem('currentUser', JSON.stringify(this.user));
      return true;
    }
    return false;
  }

  public isAuthenticated(): boolean {
    this.user = JSON.parse(window.localStorage.getItem('currentUser') || '{}');
    return !!(this.user && this.user.id);
  }

  private loadData() {
    const usersDb: IUserModel[] = JSON.parse(window.localStorage.getItem('usersDb') || '[]');
    if (usersDb.length <= 3) {
      window.localStorage.setItem('usersDb', JSON.stringify(mockUserData));
    }
  }

  private searchUser(user: IUserModel): IUserModel {
    const usersDb: IUserModel[] = JSON.parse(window.localStorage.getItem('usersDb') || '[]');
    return usersDb.filter((userDb: IUserModel) => {
      return user.email === userDb.email && user.password === userDb.password;
    })[0];
  }

  private compareEmails(email: string, emailToCompare: string) {
    const parsedEmailOriginal = this.removeDotsFromEmail(email);
    const parsedEmailToCompare = this.removeDotsFromEmail(emailToCompare);
    return parsedEmailOriginal === parsedEmailToCompare;
  }

  private removeDotsFromEmail(email: string): string {
    const splittedEmail = email.split('@');
    const name = splittedEmail[0].replace(/\./g, '');
    return name + splittedEmail[1];
  }
}
