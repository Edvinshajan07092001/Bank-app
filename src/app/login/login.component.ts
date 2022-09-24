import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='YOUR PERFECT BANKING PARTNER'
  acno=''
  psw=''

  userDetails:any={
    1000:{acno:1000,username:"Alan",password:123,balance:100000},
    1001:{acno:1001,username:"Sreekanth",password:123,balance:200000},
    1002:{acno:1002,username:"Yesu",password:123,balance:300000},
    1003:{acno:1003,username:"Edvin",password:123,balance:400000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  login(a:any,b:any){
    var acnum=a.value
    var psw=b.value
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
      else{
        alert('user not exist')
      }
    
  }
  // login(){
  //   var acnum=this.acno
  //   var psw=this.psw
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]['password']){
  //       alert('login success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //     else{
  //       alert('user not exist')
  //     }
    
  // }
  acnochange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }
  pswchange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
  }
}
