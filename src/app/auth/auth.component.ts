import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizationService } from '../autorization.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  falseLogin: Boolean = false;
  falsePassword: Boolean = false;
  Login: String = 'Helen';
  Password: String = '123';
  inputLogin: String;
  inputPassword: String;
  count = 0;

  constructor(private router: Router, private authService: AutorizationService) { }

  click() {
    if (this.count >= 3) {
      this.router.navigate(['/notlogin']);
    } else {
      if (this.inputLogin === this.Login && this.inputPassword === this.Password) {
        this.authService.sendMessage();
        this.router.navigate(['/auth2']);
      } else {
        this.falseLogin = true;
        this.falsePassword = true;
        this.count += 1;
      }

    }
  }

  ngOnInit() {
  }

}
