import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';  
import { Myhttp } from '../utility/service/myhttp.service';

@Component({
    selector: 'bsMian',
    templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
    tip:string="请先登录";
    isB:boolean=false;
    isB2:boolean=false;
    constructor(private myrouter:Router,private myhttp:Myhttp) {
        this.myrouter.events.subscribe((event) => {
            //console.log(event);
            if(event.url) {
                //console.log(event.url);
                if(event.url == "/" || event.url == "/main" ){
                    this.isB=true;
                    var uname=localStorage.getItem("uname");
                    if(uname!=null || ""){
                        this.tip = uname;
                    }else{
                        this.chklog();
                    }
                    return;
                }
            }
        });  
    }
    ngOnInit(){
       this.chklog();
    }
    chklog(){
        this.myhttp.sendRequest("login/chklog")
         .subscribe((result:any)=>{
             var uname=localStorage.getItem("uname");
             //console.log(result);
            if(result.result){
                localStorage.setItem('uname', result.uname);
                this.tip = result.uname;
            }else{
                localStorage.setItem('uname', "");
                this.tip = "请先登录";
            }
         });
    }
    jump(e:any,str:string){
        e.stopPropagation();
        this.isB=false;
        this.isB2=false;
        this.myrouter.navigate(["/main/"+str]);
    }
    hidemenu(e:any,b:any){
        e.stopPropagation();
        console.log(b);
        if(b){
            this.isB2=false;
        }else{
            this.isB2=true;
        }
    }
}