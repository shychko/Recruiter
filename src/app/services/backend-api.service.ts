import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Recruiters } from '../recruiter';
import { Configuration } from './configuration';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private _dUrl: string;
  private _url = 'http://localhost:8080/demo/all';
  private _IAurl = 'http://localhost:8080/demo/inactive';
  private _Aurl = 'http://localhost:8080/demo/add';

  private email = 'shychko@gmail.com';
  private password = 'Angular#1';
  private credentials = this.email + ':' + this.password;
  private basic = 'Basic ' + btoa(this.credentials);

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.basic });
  private options = { headers: this.headers };

  constructor(private http: HttpClient, private configuration: Configuration) {
    this._dUrl = configuration.serverWithApiUrl + 'delete/';
   }



  get(): Observable<Recruiters[]> {
    console.log('inside get()');
    return this.http.get(this._url).pipe(
      map((res: Response) => res.json()));
    }

  getUser (): Observable<any> {
    return this.http.get(this._url);
  }

  getInactiveUser(): Observable<any> {
    console.log('inside getInactiveUser()');
    return this.http.get(this._IAurl);
  }

  getUsers(): Observable<any> {
    console.log('inside getUsers()');
    return this.http.get(this._url).pipe(
          map(this.extractData));
  }

  private extractData(res: Response) {
    const body = res;
    console.log('body : ' + body);
    return body || { };
  }


  private handleError (error: any) {
      const errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

  postUser(newRecruit: Recruiters) {
    console.log('inside add()');
    const req = this.http.put(this._Aurl, newRecruit, this.options)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error('Error occured : ' + err);
      }
    );
  }

  public delete(id: number) {
       this.http.delete(this._dUrl + id);
    }

}
