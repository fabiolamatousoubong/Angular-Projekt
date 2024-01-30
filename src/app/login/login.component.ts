import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
 message: string = 'Sie sind ausgeloggen. (fabiola/fabiola)';
 name: string;
 password: string;
 auth: AuthService;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(){
    this.auth = this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){

      this.message='Sie sind eingeloggen';
    }else{
      this.message = ' name oder Passord incorrect.';
    }
  }

  login() {
    this.message ='vesucht zu verbinden...';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/gemuse']);
      }else{
        this.password = '';
        this.router.navigate(['/login']);
      }
      
    })
  
  }

  logout(){
    this.auth.logout();
    this.message = 'Sie sind ausgeloggen.'
  }

}

