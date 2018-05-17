import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLoggedIn(): boolean {
    return true; // Switch to `false` to make OnlyLoggedInUsersGuard work
  }
}
