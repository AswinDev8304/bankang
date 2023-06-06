import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient){ }
  //api to register
  register(acno:any,uname:any,psw:any){
    const bodydata={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register',bodydata)
  }
   //api to login
   login(acno:any,psw:any){
    const body={
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login',body)
   }
}
