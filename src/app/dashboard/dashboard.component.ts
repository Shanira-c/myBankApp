import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  acno = ''
  psw = ''
  amnt = ''

  acno1 = ''
  psw1 = ''
  amnt1 = ''
user=''

  constructor(private ds: DataService) { 
    this.user=this.ds.currentuser   // accessing the username of successful login user 
  }




  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt

    /*the order of parameter call must be in same order
       as that in data.service.ts file*/
    const result = this.ds.deposit(acno, psw, amnt)

    if (result) {
      alert(`INR ${amnt} is credited to your account,
        Balance is INR ${result}`)
    } else {
      alert('Incorrect Account Number or Password')
    }
  }


  withdraw() {
    var acno1 = this.acno1
    var psw1 = this.psw1
    var amnt1 = this.amnt1

    const result = this.ds.withdraw(acno1, psw1, amnt1)

    if (result) {
      alert(`INR ${amnt1} is debited your account,
        Balance is INR ${result}`)
    }
  }

}
