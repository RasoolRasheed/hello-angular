import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { LocalStorageService } from '../student/common/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService{
  
  httpOptions = {
    headers:new HttpHeaders({ 
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization'                 : 'Bearer ' + this.localStorageService.getToken()
      
    })
  }
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
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

  // get all student
  getAll() {
    return this.httpClient.get('http://localhost:8089/student',this.httpOptions).pipe(catchError(this.handleError));
}
}
