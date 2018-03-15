"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myhttp_service_1 = require('../service/myhttp.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(myhttp, myrouter) {
        this.myhttp = myhttp;
        this.myrouter = myrouter;
        this.userName = "";
        this.userUpwd = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        if (this.userName == "" || this.userUpwd == "") {
            alert("用户名或密码不为空");
            localStorage.setItem('uname', "");
            return false;
        }
        this.myhttp.sendRequest("login/dolog/" + this.userName + "/" + this.userUpwd)
            .subscribe(function (result) {
            if (result != null) {
                localStorage.setItem('uname', result);
                _this.myrouter.navigate(['/main']);
            }
            else {
                localStorage.setItem('uname', "");
                alert("用户名或密码错误");
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'bsLogin',
            templateUrl: './login.component.html'
        }), 
        __metadata('design:paramtypes', [myhttp_service_1.Myhttp, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map