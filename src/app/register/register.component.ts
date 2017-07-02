import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RobotService } from '../robot.service';

import { SessionService } from '../session.service';

import { User } from '../user';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  complexForm : FormGroup;

  modelUser: User;

  loadedOK: boolean;

  constructor(private location: Location,
              private robotService: RobotService,
              private fb: FormBuilder,
              private sessionService: SessionService) {

    this.complexForm = fb.group({
      'nick' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'telephone': [null, Validators.compose([Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])],
      'passwordConfirm': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])]
      
    });

    this.loadedOK = false;
    this.modelUser = null;

  }

  submitForm(value: any){
    console.log(value);

    let loginUser = new User(null, value.nick, value.password, value.firstName, value.lastName, value.email, value.telephone);

    this.robotService.createUser(loginUser).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.sessionService.setUser(x);
              },
        e => console.log('onError: %s', e),
        () => {
          console.log('onCompleted');
          this.modelUser = this.sessionService.getUser();
          if(this.modelUser && this.modelUser.state == 'OK') {
            this.loadedOK = true;            
          }
        });
  }

  ngOnInit() {
    
  }

  goBack(): void {

      this.location.back();

  }

  netejar() {

    console.log("netejar");

    this.loadedOK = false;
    this.modelUser = null;
    
  }

  verifyPassword(value: any) {
    
    console.log(value);
    
    console.log("validacio contrasenya:" + value.password + "===" + value.passwordConfirm + ":" + (value.password === value.passwordConfirm));

    return (value.password === value.passwordConfirm);
    
  }
}
