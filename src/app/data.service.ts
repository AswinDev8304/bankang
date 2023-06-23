import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//overloaded header
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(private http:HttpClient){ }

//to add headers (token)
   getHeader(){
    //header
     let headers=new HttpHeaders()
    //add token
     let token=JSON.parse(localStorage.getItem("token")||" ")
     //store the header in option object as header key value (to achieve overloading)
     options.headers=headers.append("acess_token",token)
    //return
    return options 
   }



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
   //api to get user data (params) :
   getUser(acno:any){
    return this.http.get('http://localhost:3000/getuser/'+acno,this.getHeader())
   }
   //api to balance:
   getBalance(acno:any){
   return this.http.get('http://localhost:3000/balance/'+acno,this.getHeader())
   }
   //api to money transfer:
   moneyTransfer(toAcno:any,fromAcno:any,amount:any,psw:any,date:any){
    const body={
      toAcno,
      fromAcno,
      amount,
      psw,
      date
    }
    return this.http.post('http://localhost:3000/transfer',body,this.getHeader())
   }
   //api to transaction array:
   getTransaction(acno:any){
    return this.http.get('http://localhost:3000/history/'+acno,this.getHeader())
   }

   //to delete ac no:
   deleteAc(acno:any){
    return this.http.delete('http://localhost:3000/deleteac/'+acno,this.getHeader())
   }

}
