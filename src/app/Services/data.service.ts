import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=''
  currentacno: any;

  constructor() { }

  /*Data base */
  userDetails: any = {
    1000: { acno: 1000, username: "Anna", password: 456, balance: 0 , transaction:[ ] },
    1005: { acno: 1005, username: "Reena", password: "we56", balance: 0 , transaction:[ ] },
    1010: { acno: 1010, username: "Asha", password: 123, balance: 0 , transaction:[ ] },
    1015: { acno: 1015, username: "Reena", password: "ree", balance: 0 , transaction:[ ] },
    1020: { acno: 1020, username: "Minnu", password: 234, balance: 0 , transaction:[ ] }
  }





  /*register() method for creating logic for register */
  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0 , transaction:[ ] }
      console.log(userDetails)
      return true

    }
  }



  /*login() method for creating logic for login */

  login(acno: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        this.currentacno=userDetails[acno]["acno"] //to store account number of succesful login user
        this.currentuser=userDetails[acno]["username"] //to store username of succesful login user
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  
  
  

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
        userDetails[acno]["transaction"].push({type:'CREDIT',amount: amnt})
        return userDetails[acno]["balance"]
      } else {
        return false
      }
    } else {
      return false
    }
  }




  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (amnt<=userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amnt
          userDetails[acno]["transaction"].push({type:'DEBIT',amount: amnt})
          return userDetails[acno]["balance"]
        } else {
          alert('Insufficient Balance')
          return false
        }   
      } else {
        alert('Incorrect Password')
        return false
      }
    } else {
      alert('Incorrect Acc No')
      return false
    }
  }



  gettransaction(acno:any) {
    return this.userDetails[acno]["transaction"]
  }

}
