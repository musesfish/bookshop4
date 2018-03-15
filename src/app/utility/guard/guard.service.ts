// a-guard-can-activate
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router} from '@angular/router'; 

@Injectable()
export class Guard implements CanActivate {
    constructor(private myrouter:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var uname = localStorage.getItem("uname");
        if(uname!="") {
            return true;
        }
        else{
            this.myrouter.navigate(['/main/login']);
        }
    }
}