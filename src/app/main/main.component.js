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
var router_1 = require('@angular/router');
var myhttp_service_1 = require('../utility/service/myhttp.service');
var MainComponent = (function () {
    function MainComponent(myrouter, myhttp) {
        var _this = this;
        this.myrouter = myrouter;
        this.myhttp = myhttp;
        this.tip = "";
        this.isB = false;
        this.myrouter.events.subscribe(function (event) {
            //console.log(event);
            if (event.url) {
                // console.log(event.url);
                if (event.url == "/" || event.url == "/main") {
                    _this.isB = true;
                }
                _this.chklog();
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.chklog();
    };
    MainComponent.prototype.chklog = function () {
        var _this = this;
        this.myhttp.sendRequest("login/chklog")
            .subscribe(function (result) {
            var uname = localStorage.getItem("uname");
            //console.log(result);
            if (result.result) {
                if (uname != result.uname) {
                    localStorage.setItem('uname', result.uname);
                }
                _this.tip = result.uname;
            }
            else {
                localStorage.setItem('uname', "");
                _this.tip = "请先登录";
            }
        });
    };
    MainComponent.prototype.jump = function (e, str) {
        e.stopPropagation();
        this.isB = false;
        this.myrouter.navigate(["/main/" + str]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'bsMian',
            templateUrl: './main.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, myhttp_service_1.Myhttp])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map