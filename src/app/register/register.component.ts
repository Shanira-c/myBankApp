import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  uname = ''
  acno = ''
  psw = ''
  
  userDetails:any = {
    1000: {acno: 1000, username: "Anna", password: 456, balance:0 },
    1005: { acno: 1005, username: "Reena", password: "we56", balance:0 },
    1010: { acno: 1010, username: "Asha", password: 123, balance:0 },
    1015: { acno: 1015, username: "Reena", password: "ree", balance:0 },
    1020: {acno: 1020, username: "Minnu", password: 234, balance:0 } 
  }
  constructor(private ds:DataService, private router:Router) { }

  register() {
    var uname = this.uname
    var acno = this.acno
    var psw = this.psw
    const res = this.ds.register(acno, uname, psw)
    if (res) {
      alert('Registration successful')
      this.router.navigateByUrl('login')
    } else {
      alert('User already exist')
      this.router.navigateByUrl('login')
    }
  }
}
