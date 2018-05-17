import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate() {
    console.log("OnlyLoggedInUserGuard");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("permission denied");
      this.router.navigate(['']);
      return false;
    }
  }
}
