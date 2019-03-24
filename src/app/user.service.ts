import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  api = 'http://localhost:4000/api';
  token;
public authobj: any;
  login(email: string, password: string) {
    this.http.post(this.api + '/loginuser', {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.token = resp.token;
      console.log(resp);
    }, (errorResp) => {
    });
  }

  auth(token: string) {
    this.http.post(this.api + '/auth', {
      token: token,
      headers: {
        'authorization': 'Bearer ' + token,
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }).subscribe((resp: any) => {
      this.authobj = resp;
      console.log(this.authobj);
    }, (errorResp) => {
    });
  }
}

