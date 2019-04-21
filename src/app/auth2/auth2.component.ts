import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.css']
})
export class Auth2Component implements OnInit {
  falseCode = false;
  Code: String = '6452';
  inputCode: String;
  count = 0;

  constructor(private router: Router) { }

  click() {
    if (this.count >= 3) {
      this.router.navigate(['/notlogin']);
    } else {
      if (this.inputCode === this.Code) {
        this.router.navigate(['/login']);
      } else {
        this.falseCode = true;
        this.count += 1;
      }

    }
  }
  ngOnInit() {
  }

}
