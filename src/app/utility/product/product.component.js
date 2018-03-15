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
var ProductComponent = (function () {
    function ProductComponent(myhttp) {
        this.myhttp = myhttp;
        this.list = [];
        this.pageNum = 1;
        this.pages = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getData(this.pageNum);
    };
    ProductComponent.prototype.getData = function (pno) {
        var _this = this;
        //console.log(pno);
        //console.log(this.pageSize);
        this.pages = [];
        if (pno == -1) {
            pno = this.pageNum != 1 ? this.pageNum - 1 : 1;
        }
        else if (pno == -2) {
            pno = this.pageNum != this.pageSize ? this.pageNum + 1 : this.pageSize;
        }
        this.myhttp.sendRequest("product/list/" + pno)
            .subscribe(function (result) {
            console.log(result);
            _this.list = result.data;
            _this.pageNum = result.pageNum;
            _this.pageSize = result.pageSize;
            for (var i = 1; i <= result.pageSize; i++) {
                _this.pages.push(i);
            }
        });
    };
    ProductComponent.prototype.del = function (e, id) {
        var _this = this;
        //console.log(id);
        e.stopPropagation();
        this.myhttp.sendRequest("product/del/" + id)
            .subscribe(function (result) {
            alert("删除成功");
            _this.getData(_this.pageNum);
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'bsProduct',
            templateUrl: './product.component.html'
        }), 
        __metadata('design:paramtypes', [myhttp_service_1.Myhttp])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map