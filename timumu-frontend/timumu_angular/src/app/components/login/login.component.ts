import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    // const headers = new HttpHeaders({Authorization: 'Basic ' 
    // + btoa(this.user.email + ":" + this.user.password)});
    window.sessionStorage.setItem("userdetails", JSON.stringify(this.user));
    this.httpClient.get("http://localhost:8080/user", { observe: 'response',withCredentials: true }).subscribe(
      (data) => {
        this.user = <any>data.body;
        this.user.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.user));
        let xsrf = getCookie('XSRF-TOKEN');
        console.log(xsrf);
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        this.router.navigateByUrl("content");
      },
      (error) => {
        console.log(error);
      }
    );

  }
  getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }

}
