import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 data="Happy banking with us !"
 pdata="Enter acc no"
 servicedata:any
 constructor(private rout:Router, private ds:DataService){

 }
ngOnInit():void{
this.servicedata=this.ds.sdata
console.log(this.servicedata);
this.ds.smethod()

}
 login(a:any){
  console.log(a.value);
  
  alert('login clicked')
  this.rout.navigateByUrl('home')
 }
 accnoChange(event:any){
  console.log(event.target.value);
  
 }
}
