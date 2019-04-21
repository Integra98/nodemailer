import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  sendMessage() {
     // return this.http.post('http://localhost:3000/sendmail', null, null);
     return this.http.post('http://localhost:3000/api/sendmail', null, null)
     .pipe(map(resp => resp.json()))
     .subscribe(m => console.log('Send Message!'));

  }


}
