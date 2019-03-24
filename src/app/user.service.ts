import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:4000/api';
  token;

  login(email: string, password: string) {
    this.http.post(this.api + '/loginuser', {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.token = resp.token;
      console.log(this.token);
    }, (errorResp) => {
    });
  }
}
