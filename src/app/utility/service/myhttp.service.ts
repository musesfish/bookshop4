import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Myhttp {
    constructor(private http: Http) { }
    // 向myUrl对应服务器发起请求
    sendRequest(myUrl:string){
        return this.http.get("http://localhost:4000/"+myUrl,{withCredentials:true})
        //return this.http.get("http://bsnode.applinzi.com/"+myUrl,{withCredentials:true})
            .map((response:Response)=>response.json());
    }
}