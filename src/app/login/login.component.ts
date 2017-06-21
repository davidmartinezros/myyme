import { Component, OnInit } from '@angular/core';

import { RobotService } from '../robot.service';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loaded: boolean;

  nick: string;
  
  password: string;

  loginOK: Boolean;

  modelUser: User;

  constructor(private robotService: RobotService) {
    this.loaded = false;
  }

  ngOnInit() {
    
  }

  entrar() {

    if(!this.nick || this.nick == '') return;
    if(!this.password || this.password == '') return;

    let loginUser = new User(null, this.nick, this.password);

    this.robotService.createUser(loginUser).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelUser = x;
              },
        e => console.log('onError: %s', e),
        () => {
          console.log('onCompleted');
          this.loaded = true;
        });
/*
    this.robotService.validateUser(loginUser).subscribe(
        x => {
              console.log('onNext validateUser: %s', x);
              this.loginOK = x;
              },
        e => console.log('onError validateUser: %s', e),
        () => {
          console.log('onCompleted validateUser');
          if(this.loginOK && this.loginOK == true) {
            this.robotService.getUser(loginUser.id).subscribe(
              x => {
                    console.log('onNext getUser: %s', x);
                    this.modelUser = x;
                    },
              e => console.log('onError getUser: %s', e),
              () => {
                console.log('onCompleted getUser');
              });
            }
        });
        */
  }

}
