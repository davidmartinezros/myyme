import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class SessionService {

  private user: User;

  constructor() { }

  public setUser(user: User) {

    this.user = user;

  }

  public getUser() {

    return this.user;
  
  }

}
