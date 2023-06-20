import { Component } from '@angular/core';
import { SignUpObject, LoginObject } from '../module';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  signupObj: SignUpObject = {
    userName: '',
    email: '',
    password:''
   };
 
 loginObj: LoginObject = {
 email: '',
 password: ''  
 };
 
 onSignUp(){
   // verify if there is already a 'users' item in the local storage and if not, set it to an empty array
   if (localStorage.getItem('users') == null) localStorage.setItem('users', '[]');
 
   // get the 'users' item from localstorage
   let users = localStorage.getItem('users');
 
   // define an array with the content of users item in local storage
   let usersArray = JSON.parse(users!);
 
   // store new user data from register form to users array
   usersArray.push(this.signupObj);
 
   // update value of 'users' item in localstorage
   localStorage.setItem('users', JSON.stringify(usersArray));
 
   // clear the register form
   this.signupObj = {
     userName: '',
     email: '',
     password:''
    };
 };
 
 onLogIn(){
   let usersArray = JSON.parse(localStorage.getItem('users')!);
 
   let usersHavingGivenEmail: SignUpObject[] = usersArray.filter((user: SignUpObject) => user.email === this.loginObj.email);
   if (usersHavingGivenEmail.length > 0) {
     if (usersHavingGivenEmail[0].password === this.loginObj.password) {
       localStorage.setItem('user', JSON.stringify(usersHavingGivenEmail[0]));
       window.location.assign("/main-nav");
       alert('Login Success');
       this.loginObj = {
         email: '',
         password: ''
       }
       
 
     } else {
       alert('Wrong password');
     }
   } else {
     alert('no such account exists!');
   }
 }

}
