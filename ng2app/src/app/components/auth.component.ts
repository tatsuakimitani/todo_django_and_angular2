import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LoginUser } from '../models/models';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/auth.component.html',
  styleUrls: ['../static/auth.component.css']
})
export class AuthComponent {
  loginuser: any = {};
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.login(this.loginuser.username, this.loginuser.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {

        }
      );
  }

  logout(): void{

  }

  signup(): void{

  }

  deleteUser(): void{

  }

  editUser(): void{

  }

}
