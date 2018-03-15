import { Component, OnInit } from '@angular/core';
import { Myhttp } from '../service/myhttp.service';

@Component({
    selector: 'bsProduct',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    list:Array<any> = [];
    pageNum:number = 1;
    pages:Array<any> = [];
    pageSize:number;
    constructor(private myhttp:Myhttp) { }

    ngOnInit(){
       this.getData(this.pageNum);
    }

    getData(pno:any){
        //console.log(pno);
        //console.log(this.pageSize);
        this.pages=[];
        if(pno==-1){
            pno=this.pageNum!=1?this.pageNum-1:1;
        }else if(pno==-2){
            pno=this.pageNum!=this.pageSize?this.pageNum+1:this.pageSize;
        }
        this.myhttp.sendRequest("product/list/"+pno)
         .subscribe((result:any)=>{
            //console.log(result);
            this.list=result.data;
            this.pageNum=result.pageNum;
            this.pageSize=result.pageSize;
            for(let i=1;i<=result.pageSize;i++){
                this.pages.push(i);
            }
         });
    }

    del(e:any,id:any){
        //console.log(id);
        e.stopPropagation();
        this.myhttp.sendRequest("product/del/"+id)
         .subscribe((result:any)=>{
            alert("删除成功");
            this.getData(this.pageNum);
         });
    }
}