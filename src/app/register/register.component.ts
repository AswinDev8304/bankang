import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  pswCheck:boolean=false
  constructor(private ds: DataService, private rout: Router, private fb: FormBuilder) { }

  //creacting a reeactive model:
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: [' ', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    psw: [' ', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    cpsw: [' ', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  signup() {
    var acno = this.registerForm.value.acno
    var uname = this.registerForm.value.uname
    var psw = this.registerForm.value.psw
    var cpsw = this.registerForm.value.cpsw
    if (this.registerForm.valid) {
      if (cpsw == psw) {
        this.ds.register(acno, uname, psw).subscribe((result: any) => {
          alert(result.message)
          this.rout.navigateByUrl("")
        },
          result => {
            alert(result.error.message)
          }
        )

      }
      else {
        //alert('passwords dont match')
        this.pswCheck=true
      }
    }
    else{
      alert('invalid input')
    }

  }

}




