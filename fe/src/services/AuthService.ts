import {IAuthModel, IUserModel} from '@/entities/IUserModel';

export class AuthService {
  private user?: IUserModel;

  constructor() {
    this.isAuthenticated();
  }

  public async register(user: IUserModel): Promise<IUserModel | any> {
    try {
      if (user.password && user.email && user.password === user.rePassword) {
        const newUser = await this.registerApi(user);
        return newUser;
      } else {
        throw Error('Hay un problema con el usuario o las contraseñas introducidas.');
      }
    } catch (e) {
      throw e;
    }
  }

  public async login(user: IUserModel): Promise<boolean> {
    try {
      const userFound = await this.loginApi(user);
      if (userFound && userFound.id) {
        this.user = userFound;
        window.localStorage.setItem('currentUser', JSON.stringify(this.user));
        return true;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }

  public isAuthenticated(): boolean {
    this.user = JSON.parse(window.localStorage.getItem('currentUser') || '{}');
    return !!(this.user && this.user.id);
  }

  public logout(): boolean {
    window.localStorage.setItem('currentUser', '{}');
    this.user = JSON.parse(window.localStorage.getItem('currentUser') || '{}');
    return !(this.user && this.user.id);
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

  private async registerApi(user: IUserModel): Promise<IAuthModel | any> {
    try {
      const result = await fetch('https://www.panor.am/api/Accounts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!result.ok) {
        throw Error(result.statusText);
      }
      return await result.json();
    } catch (error) {
      throw error;
    }
  }

  private async loginApi(user: IUserModel): Promise<IUserModel | any> {
    try {
      const result = await fetch('https://www.panor.am/api/Accounts/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!result.ok) {
        throw Error(result.statusText);
      }
      return await result.json();
    } catch (error) {
      throw error;
    }
  }
}
