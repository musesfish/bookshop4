import { Component, OnInit} from '@angular/core';
import { Myhttp } from '../service/myhttp.service';
import { Router} from '@angular/router';    

@Component({
    selector: 'bsLogin',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    userName:string="test";
    userUpwd:string="123456";
    constructor(private myhttp:Myhttp,private myrouter:Router) { }

    ngOnInit(){}

    doLogin(){
        if(this.userName=="" || this.userUpwd==""){
            alert("用户名或密码不为空");
            localStorage.setItem('uname', "");
            return false;
        }
        this.myhttp.sendRequest("login/dolog/"+this.userName+"/"+this.userUpwd)
         .subscribe((result:any)=>{
             //console.log("smy login"+result);
            if(result!=null){
                localStorage.setItem('uname', result);
                this.myrouter.navigate(['/main']);
            }else{
                localStorage.setItem('uname', "");
                alert("用户名或密码错误");
            }
         });
    }

}