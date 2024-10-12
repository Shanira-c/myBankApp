import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
/* aim  :  for One Way Binding [Component to View binding]
                                --> 1. String Interpollation */
  aim = "Your Perfect Banking Partner"

  /* for One Way Binding [Component to View binding]
                                --> 2. Property Binding */
  data = "Enter your A/C No"  

/* acno = ' ' and  psw = ' '  --> using for $event binding  */
  acno = '';
  psw = '';


  userDetails:any = {
    1000: {acno: 1000, username: "Anna", password: 456, balance:0 },
    1005: { acno: 1005, username: "Reena", password: "we56", balance:0 },
    1010: { acno: 1010, username: "Asha", password: 123, balance:0 },
    1015: { acno: 1015, username: "Reena", password: "ree", balance:0 },
    1020: {acno: 1020, username: "Minnu", password: 234, balance:0 } 
  }


  /*-------------------------------------------------------------------------*/
  constructor(private router : Router, private ds:DataService){}  

  /*----------------------------------------------------------------------*/
  
  login() {
    var acno = this.acno
    var psw = this.psw
    const rst = this.ds.login(acno, psw)
      if (rst){
        alert('Login Successful')
        this.router.navigateByUrl('dashboard');
    }else {
      alert('Incorrect Username or Password');
      }
    }
  }
/*---------------------------------------------------------------------*/
  
    /*  login() :  for One Way Binding [ View to Component binding]
                                --> 1. Event Binding */
  /* login(a:any,b:any) {
    //alert('login button clicked')

    this.acno = a.value
    this.psw = b.value
    
    var acno = this.acno
    var psw = this.psw
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        alert('Log In Success')
      } else {
        alert('Password incorrect')
      }
      
    } else {
      alert('Account not exist')
    }


  }*/

    /*  acnoChange() :  for One Way Binding [ View to Component binding] 
          --> 2. Dollar Event ($event) Binding */

  /*-------------------------------------------------------------------------*/
  
    /*onchange(event: any) {
      this.acno = event.target.value;
      console.log(this.acno)

/*  this.acno  and  this.psw --> */
  /*    
    }
    pswChange(event: any) {
      this.psw = event.target.value;
      console.log(this.psw)
      

  }
}
*/