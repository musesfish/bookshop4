import { Component, OnInit } from '@angular/core';
import { Myhttp } from '../service/myhttp.service';

@Component({
    selector: 'bsUser',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    list:Array<any> = [];
    pageNum:number = 1;
    pages:Array<any> = [];
    pageCount:number;
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
            pno=this.pageNum!=this.pageCount?this.pageNum+1:this.pageCount;
        }
        this.myhttp.sendRequest("user/list/"+pno)
         .subscribe((result:any)=>{
           // console.log(result);
            this.list=result.data;
            this.pageNum=result.pageNum;
            this.pageCount=result.pageCount;
            for(let i=1;i<=result.pageCount;i++){
                this.pages.push(i);
            }
         });
    }

    del(e:any,id:any){
       // console.log(id);
        e.stopPropagation();
        this.myhttp.sendRequest("user/del/"+id)
         .subscribe((result:any)=>{
            alert("删除成功");
            this.getData(this.pageNum);
         });
    }
}