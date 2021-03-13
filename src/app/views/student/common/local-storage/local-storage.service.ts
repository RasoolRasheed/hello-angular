import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//api SERVER URL
const API_SERVER_URL:string = "//localhost:8089";
// const IMG_ACCESS_URL  :   string  =   "file://192.168.40.234/f$/";

// const API_SERVER_URL:string = "//128.199.91.150:8089";
const IMG_ACCESS_URL:string = "file://128.199.91.150/f$/";

@Injectable()
export class LocalStorageService {
    constructor(
        private router: Router
    ) { }

    //token
    setToken(token:string):void{
        window.localStorage.setItem('token-medicare',token);
    }
    getToken():string{
        if(window.localStorage.getItem('token-medicare') == null){
            this.router.navigate(['/login']);
        }
        return window.localStorage.getItem('token-medicare');
    }

    //set data
    setData(data:any):void{
        window.localStorage.setItem('data-medicare',JSON.stringify(data));
    }
    
    getData():any{
        return JSON.parse(window.localStorage.getItem('data-medicare'));
    }


    //authenticate login -- true / false
    authenticateLogin():boolean{
        if(this.getData()!=null && this.getToken() !=null){
            return true;
        }else{
            return false;
        }
    }

    //logout
    clearLogin():void{
        window.localStorage.clear();
    }

    //get server api url
    getApiServerUrl():string{
        return API_SERVER_URL;
    }
    
    //get img access url
    getImgAccessUrl():string{
        return IMG_ACCESS_URL;
    }

    
}
