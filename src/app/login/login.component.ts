import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllapiService } from '../allapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;
  submitted!: boolean;
  empList: Array<{ Email: string }> = [];
  message: any;
  url = 'list%3FsortType'
  value = 'hightolow'
  constructor(
    private fb: FormBuilder,
    private route: Router,
    public http: AllapiService
  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  login() {
    this.submitted = true;
    if (this.loginform.invalid) {
      return
    }
    else {
      let Email = this.loginform.get('username').value
      let Pwd = this.loginform.get('password').value
      if (Email == 'test' && Pwd == 'test') {
        localStorage.setItem('user', JSON.stringify(this.loginform.value))
        this.route.navigate(['products', 'list%3FsortType=', this.value])
        this.http.toster('Login Successfully', 'Success')

      }
      else {
        this.message = 'invalid details'
        this.http.showError('invalid message', 'error');
      }
    }
  }
}
