import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LocalStorageService} from './common/local-storage/local-storage.service';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class StudentService{

  httpOptions = {
    headers:new HttpHeaders({ 
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjEsImV4cCI6MTYwNTc4NDk1MSwiaXNzIjoidGVzdCJ9.Lem8KAmYVvWiZVAWGNje_bUK9xVQa4CsFIOl1EgWYE7YEIzlKFYvVqGDzq_VBNwuK1q0dXIbk8UDrnKsHw2c6w'

    })
  }
  constructor(
    private router: Router,private httpClient: HttpClient,
    private localStorageService:LocalStorageService
    ) { 
  }

 

  // HTTP request error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
    } else {
        console.error('Backend returned code error'+ error);
    }
    return throwError('Something bad happened; please try again later.');

  }

  // set token
  getToken() {
    // return this.localStorageService.getLocalStorageToken();
  }

  // login
  authenticate(loginData:any) {
    return this.httpClient.post('http://localhost:8089/login', loginData, this.httpOptions)
    
}
}
