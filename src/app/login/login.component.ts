import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = "Happy banking with us !"

  servicedata: any
  
  constructor(private rout: Router, private ds: DataService, private fb: FormBuilder) {

  }
  ngOnInit(): void {

  }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: [' ', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  login() {
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw
    if (this.loginForm.valid) {
      this.ds.login(acno, psw).subscribe((result: any) => {
          
        localStorage.setItem('currentUser',result.currentUser)
        localStorage.setItem('currentAcno',result.currentAcno)
        localStorage.setItem('token',JSON.stringify(result.token))
        
        alert(result.message)
        this.rout.navigateByUrl('home')
      },
        result => {
          alert(result.error.message)
        })
    }
    else {
      alert("Please enter valid details")
    }

  }

}

