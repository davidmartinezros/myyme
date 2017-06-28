import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RobotService } from '../robot.service';

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

  loaded: boolean;

  constructor(private location: Location,
              private robotService: RobotService,
              private fb: FormBuilder) {

    this.complexForm = fb.group({
      'nick' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'telephone': [null, Validators.required],
      'password' : [null, Validators.required],
      'passwordConfirm' : [null, Validators.required]
    });

  }

  submitForm(value: any){
    console.log(value);

    console.log("validacio contrasenya:" + value.password + "===" + value.passwordConfirm + ":" + (value.password === value.passwordConfirm));

    let loginUser = new User(null, value.nick, value.password, value.firstname, value.lastName, value.email, value.telephone);

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
  }

  ngOnInit() {
    
  }

  goBack(): void {
      this.location.back();
  }

}
