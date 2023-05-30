import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno:any
  uname:any
  psw:any
  cpsw:any
  signup(){
  console.log(this.acno);
  console.log(this.uname);
  console.log(this.psw);
  console.log(this.cpsw);
  
  
  
  
  }

}
